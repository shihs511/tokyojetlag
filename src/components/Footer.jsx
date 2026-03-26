export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-hover)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-ink-faint)]">
        <p>&copy; 2026 Tokyo Jet Lag. 時差ボケ東京日記</p>
        <p className="flex items-center gap-1">
          Built with
          <span className="text-[var(--color-accent)]">♥</span>
          somewhere between timezones
        </p>
      </div>
    </footer>
  )
}
