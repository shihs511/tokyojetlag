/**
 * Tokyo Jet Lag — Image Error Handler
 * Detects image load failures and replaces with fallback SVG placeholder
 * Includes retry logic and smooth transitions
 */

(function() {
  'use strict';

  // Configuration
  const MAX_RETRIES = 2;
  const RETRY_DELAY = 1000; // ms
  const FADE_IN_DURATION = 300; // ms

  /**
   * Creates an inline SVG placeholder with moon + Tokyo skyline
   */
  function createFallbackSvg() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 300 200');
    svg.setAttribute('class', 'image-error-placeholder');
    svg.setAttribute('aria-label', 'Image unavailable');

    // Dark gradient background
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'skyline-gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '100%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '0%');

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#04040f');

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#1a1a2e');

    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.appendChild(defs);

    // Background
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', '300');
    bg.setAttribute('height', '200');
    bg.setAttribute('fill', 'url(#skyline-gradient)');
    svg.appendChild(bg);

    // Moon with neon glow
    const moonGlow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    moonGlow.setAttribute('cx', '250');
    moonGlow.setAttribute('cy', '50');
    moonGlow.setAttribute('r', '35');
    moonGlow.setAttribute('fill', 'none');
    moonGlow.setAttribute('stroke', '#f97316');
    moonGlow.setAttribute('stroke-width', '1');
    moonGlow.setAttribute('opacity', '0.3');
    svg.appendChild(moonGlow);

    const moon = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    moon.setAttribute('cx', '250');
    moon.setAttribute('cy', '50');
    moon.setAttribute('r', '25');
    moon.setAttribute('fill', '#fbbf24');
    svg.appendChild(moon);

    // Moon shadow/crater
    const crater = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    crater.setAttribute('cx', '245');
    crater.setAttribute('cy', '45');
    crater.setAttribute('r', '6');
    crater.setAttribute('fill', '#f59e0b');
    crater.setAttribute('opacity', '0.6');
    svg.appendChild(crater);

    // Tokyo skyline silhouette
    const skyline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    skyline.setAttribute('d', `
      M 0 140
      L 15 140 L 15 110 L 25 110 L 25 130 L 35 130 L 35 95 L 45 95 L 45 125 L 55 125
      L 55 85 L 65 85 L 65 115 L 75 115 L 75 70 L 85 70 L 85 120 L 95 120
      L 95 75 L 105 75 L 105 110 L 115 110 L 115 80 L 125 80 L 125 115 L 135 115
      L 135 90 L 145 90 L 145 120 L 155 120 L 155 100 L 165 100 L 165 125
      L 175 125 L 175 105 L 185 105 L 185 130 L 195 130 L 195 110 L 205 110
      L 205 135 L 215 135 L 215 115 L 225 115 L 225 140 L 235 140 L 235 120
      L 245 120 L 245 140 L 255 140 L 255 125 L 265 125 L 265 140 L 275 140
      L 275 130 L 285 130 L 285 140 L 300 140 L 300 200 L 0 200 Z
    `);
    skyline.setAttribute('fill', '#18181b');
    skyline.setAttribute('stroke', '#27272a');
    skyline.setAttribute('stroke-width', '0.5');
    svg.appendChild(skyline);

    // Neon glow accent
    const accent = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    accent.setAttribute('x1', '0');
    accent.setAttribute('y1', '140');
    accent.setAttribute('x2', '300');
    accent.setAttribute('y2', '140');
    accent.setAttribute('stroke', '#00f0ff');
    accent.setAttribute('stroke-width', '1');
    accent.setAttribute('opacity', '0.5');
    svg.appendChild(accent);

    return svg;
  }

  /**
   * Replaces an image with fallback SVG
   */
  function replacImageWithFallback(img) {
    img.classList.add('image-error');

    const container = document.createElement('div');
    container.className = 'image-error-container';
    container.style.position = 'relative';
    container.style.display = 'inline-block';
    container.style.width = img.width ? img.width + 'px' : '100%';
    container.style.height = img.height ? img.height + 'px' : 'auto';

    const svg = createFallbackSvg();
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.opacity = '0';
    svg.style.transition = `opacity ${FADE_IN_DURATION}ms ease-in`;

    container.appendChild(svg);
    img.parentNode.replaceChild(container, img);

    // Trigger fade-in
    setTimeout(() => {
      svg.style.opacity = '1';
    }, 10);
  }

  /**
   * Handles image load errors with retry logic
   */
  function handleImageError(img) {
    const src = img.src;
    const retryCount = img.dataset.retryCount || 0;

    if (retryCount < MAX_RETRIES) {
      img.dataset.retryCount = parseInt(retryCount) + 1;
      setTimeout(() => {
        img.src = src + '?retry=' + Date.now();
      }, RETRY_DELAY);
    } else {
      replacImageWithFallback(img);
    }
  }

  /**
   * Initializes error handlers on all images
   */
  function initImageErrorHandlers() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('data-error-handler-init')) {
        img.setAttribute('data-error-handler-init', 'true');
        img.onerror = function() {
          handleImageError(this);
        };

        // Handle already-broken images
        if (!img.complete && img.naturalHeight === 0) {
          handleImageError(img);
        }
      }
    });
  }

  /**
   * Observes DOM for dynamically added images
   */
  function observeForNewImages() {
    const observer = new MutationObserver(mutations => {
      let hasNewImages = false;
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          const images = mutation.target.querySelectorAll('img');
          if (images.length > 0) {
            hasNewImages = true;
          }
        }
      });
      if (hasNewImages) {
        initImageErrorHandlers();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return observer;
  }

  /**
   * Initialize on DOM ready and watch for dynamic content
   */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initImageErrorHandlers();
        observeForNewImages();
      });
    } else {
      initImageErrorHandlers();
      observeForNewImages();
    }
  }

  // Export for external usage
  window.initImageErrorHandlers = initImageErrorHandlers;

  // Auto-initialize when loaded
  init();
})();
