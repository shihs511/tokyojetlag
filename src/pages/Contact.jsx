import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <p className="text-[var(--color-accent)] text-sm tracking-widest uppercase mb-4 font-medium">Contact</p>
      <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-4">
        連絡する
      </h1>
      <p className="text-[var(--color-ink-muted)] mb-12 text-lg leading-relaxed max-w-2xl">
        時差ボケ仲間からのメッセージ、いつでも歓迎。
        東京の深夜スポット情報、コラボ提案、
        「俺も眠れなかった」報告、なんでもどうぞ。
      </p>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Contact Form */}
        <div className="md:col-span-3">
          {sent ? (
            <div className="rounded-lg border border-[var(--color-surface-hover)] bg-[var(--color-surface-raised)] p-8 text-center">
              <p className="text-2xl mb-2">✓</p>
              <p className="text-[var(--color-ink)] font-medium">送信完了</p>
              <p className="text-[var(--color-ink-faint)] text-sm mt-1">ありがとう。時差ボケが治ったら返信します。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-[var(--color-ink-faint)] mb-2">名前</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-surface-hover)] rounded-lg px-4 py-3 text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--color-ink-faint)] mb-2">メール</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-surface-hover)] rounded-lg px-4 py-3 text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--color-ink-faint)] mb-2">メッセージ</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-[var(--color-surface-raised)] border border-[var(--color-surface-hover)] rounded-lg px-4 py-3 text-[var(--color-ink)] placeholder-[var(--color-ink-faint)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="午前3時に何を見た？"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              >
                送信する
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-[var(--color-ink)] font-medium text-sm uppercase tracking-wider mb-3">SNS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://instagram.com/tokyojetlag" target="_blank" rel="noopener noreferrer"
                   className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Instagram — @tokyojetlag
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tokyojetlag" target="_blank" rel="noopener noreferrer"
                   className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors">
                  X (Twitter) — @tokyojetlag
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--color-ink)] font-medium text-sm uppercase tracking-wider mb-3">ロケーション</h3>
            <p className="text-sm text-[var(--color-ink-muted)]">
              Based in Los Angeles<br />
              時差ボケ中は東京
            </p>
          </div>

          <div>
            <h3 className="text-[var(--color-ink)] font-medium text-sm uppercase tracking-wider mb-3">コラボ</h3>
            <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed">
              写真の使用許可、メディア掲載、
              時差ボケ旅行者向けの企画など、
              気軽にメッセージください。
            </p>
          </div>

          <div className="pt-4 border-t border-[var(--color-surface-hover)]">
            <p className="text-xs text-[var(--color-ink-faint)]">
              返信は通常48時間以内。
              ただし時差ボケ中は保証できません。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
