export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
      <p className="text-[var(--color-accent)] text-sm tracking-widest uppercase mb-4 font-medium">About</p>
      <h1 className="font-serif text-3xl md:text-5xl tracking-tight mb-8">
        時差ボケが教えてくれたこと
      </h1>

      <div className="space-y-6 text-[var(--color-ink-muted)] leading-relaxed text-lg">
        <p>
          「Tokyo Jet Lag」は、ジェットラグのせいで眠れなかった夜に
          偶然出会った東京の景色を記録するフォトジャーナル。
          午前2時のコンビニ、誰もいない渋谷の交差点、
          朝靄の築地 — 普通の旅行者が絶対見ない時間の東京を撮り続けてる。
        </p>
        <p>
          きっかけは2026年3月の東京旅行。
          LAからの14時間フライトで体内時計がぶっ壊れて、
          毎晩3時に目が覚める生活が始まった。
          最初はただ辛かっただけど、「眠れないなら外に出よう」って
          決めた瞬間から、毎日が冒険になった。
        </p>
        <p>
          深夜の東京は、昼間のカオスとは別世界。
          静かで、どこか優しくて、自分だけの街みたいに感じる。
          このサイトは、そんな時差ボケ旅行者にしか見えない
          東京の横顔を共有するために作った。
        </p>
        <p>
          次に東京でジェットラグに悩まされたら、
          ホテルのベッドでスマホ見てないで外に出てみて。
          この街は24時間、何かしら面白いことが起きてるから。
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-[var(--color-surface-hover)]">
        {[
          { num: '14h', label: 'LAとの時差' },
          { num: '7', label: '滞在日数' },
          { num: '23', label: '深夜に撮った写真' },
          { num: '∞', label: 'コンビニおにぎり' },
        ].map(({ num, label }) => (
          <div key={label} className="text-center">
            <p className="font-serif text-3xl md:text-4xl text-[var(--color-accent)] mb-1">{num}</p>
            <p className="text-xs md:text-sm text-[var(--color-ink-faint)]">{label}</p>
          </div>
        ))}
      </div>

      {/* Gear / How I Shot */}
      <div className="mt-16 pt-16 border-t border-[var(--color-surface-hover)]">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight mb-6">
          撮影について
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-[var(--color-ink-muted)]">
          <div>
            <h3 className="text-[var(--color-ink)] font-medium mb-2">カメラ</h3>
            <p className="text-sm leading-relaxed">
              iPhone 15 Pro + たまにFujifilm X100VI。
              深夜の東京はiPhoneのナイトモードが意外と強い。
              三脚なし、手持ちオンリー。時差ボケで手が震えてるのもご愛嬌。
            </p>
          </div>
          <div>
            <h3 className="text-[var(--color-ink)] font-medium mb-2">編集</h3>
            <p className="text-sm leading-relaxed">
              Lightroomでシャドウ持ち上げて、
              彩度は控えめに。深夜の東京のムードをそのまま残したい。
              フィルターはかけない主義。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
