const photos = [
  {
    url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&h=600&fit=crop',
    alt: '東京タワーと夜の街並み',
    caption: '六本木ヒルズから — 午前2時、まだ眠れない夜',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=500&h=500&fit=crop',
    alt: '新宿ゴールデン街の路地',
    caption: 'ゴールデン街、3軒目のバーを出たあと',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=500&h=500&fit=crop',
    alt: 'コンビニの明かり',
    caption: '午前4時のファミマ — ここが俺のオアシス',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=400&fit=crop',
    alt: '渋谷スクランブル交差点の夜',
    caption: '渋谷、終電後の交差点。信号だけが仕事してる',
    span: 'md:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1624601573012-efb68f3f150d?w=500&h=500&fit=crop',
    alt: '築地場外市場の朝',
    caption: '築地、午前5時半。最初の客になった',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=500&h=500&fit=crop',
    alt: '山手線の車内',
    caption: '始発の山手線、乗客は3人だけ',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=500&h=500&fit=crop',
    alt: '東京の電車ホーム',
    caption: '新宿駅 — この街は電車で呼吸してる',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=400&fit=crop',
    alt: '浅草寺の雷門',
    caption: '浅草、朝6時。観光客ゼロの雷門を独り占め',
    span: 'md:col-span-2',
  },
]

const journalEntries = [
  {
    time: 'Day 1 — 03:47 AM',
    title: '成田着、そして覚醒',
    text: '14時間のフライトで完全にバグった体内時計。ホテルに着いて倒れるように寝たのに、3時47分に目が覚めた。カーテンの隙間から東京タワーのオレンジが見える。「せっかくだし」と思って外に出た。深夜の六本木は、昼間とは全然違う顔をしてた。',
  },
  {
    time: 'Day 1 — 04:30 AM',
    title: '午前4時のファミマ',
    text: 'コンビニの自動ドアが開いた瞬間の、あの蛍光灯の白さ。店員さんが「いらっしゃいませ」って言ってくれて、ああ東京にいるんだなって実感した。ツナマヨおにぎりとブラックコーヒー。こんな時間なのに、ちゃんと温かいものがある国。',
  },
  {
    time: 'Day 2 — 02:15 AM',
    title: '渋谷、誰もいないスクランブル',
    text: '日中は何千人もが行き交うあの交差点。午前2時はただ信号が律儀に色を変えてるだけ。ど真ん中に立って、360度見渡した。ビルの広告だけが光ってる。この贅沢は時差ボケした人間だけが知ってる。',
  },
  {
    time: 'Day 3 — 05:20 AM',
    title: '築地の朝、一番乗り',
    text: '時差ボケ3日目、もう開き直った。始発で築地に向かった。場外市場は朝5時からもう動いてた。湯気の立つ玉子焼きを頬張りながら、隣のおじさんに「早いね」って笑われた。「ジェットラグで」って言ったら「最高の目覚ましだな」って。',
  },
  {
    time: 'Day 4 — 01:00 AM',
    title: 'ゴールデン街、3軒はしご',
    text: '新宿ゴールデン街。5席しかないバーで隣に座ったのは、同じく時差ボケのフランス人だった。お互い「眠れないんだよね」で意気投合。マスターが「時差ボケ客は常連になる」って笑ってた。この狭さが、距離を縮める。',
  },
  {
    time: 'Day 5 — 06:00 AM',
    title: '浅草、朝の静けさ',
    text: '朝6時の浅草寺。雷門の前に誰もいない。仲見世通りのシャッターが全部閉まってる。この景色を見られるのは、早起きの地元民か、時差ボケの旅行者だけ。お参りして引いたおみくじは「吉」。時差ボケにも吉があるらしい。',
  },
  {
    time: 'Day 7 — 03:00 AM',
    title: '最後の夜、東京タワー',
    text: '帰国前夜。もう時差ボケも治りかけてるのに、やっぱり3時に目が覚めた。最後だからって、もう一度東京タワーを見に行った。ライトアップはもう消えてたけど、シルエットだけでもわかる。この街で過ごした眠れない夜の全部が、なんか宝物みたいに思えた。',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
          <p className="text-[var(--color-accent)] text-sm tracking-widest uppercase mb-4 font-medium">
            Tokyo Jet Lag — 時差ボケ東京日記
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
            眠れない夜に出会った、
            <br />
            <span className="text-[var(--color-ink-muted)]">知らない東京。</span>
          </h1>
          <p className="text-[var(--color-ink-muted)] text-lg md:text-xl max-w-2xl leading-relaxed">
            14時間の時差がくれた、午前3時の東京。
            ガイドブックには載らない、眠れない夜だけの記録。
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm text-[var(--color-ink-faint)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
              7 days in Tokyo
            </span>
            <span>·</span>
            <span>March 2026</span>
          </div>
        </div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Photo Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg bg-[var(--color-surface-raised)] ${photo.span}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-light">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journal Section */}
      <section className="border-t border-[var(--color-surface-hover)]">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[var(--color-accent)] text-sm tracking-widest uppercase mb-3 font-medium">Journal</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">
            7日間の時差ボケ日記
          </h2>
          <p className="text-[var(--color-ink-faint)] mb-16 max-w-xl">
            眠れないなら、外に出よう。
            そう決めてから、東京の深夜は毎日が冒険になった。
          </p>
          <div className="space-y-16">
            {journalEntries.map((entry, i) => (
              <article key={i} className="group">
                <p className="text-xs text-[var(--color-ink-faint)] tracking-widest uppercase mb-2 font-mono">
                  {entry.time}
                </p>
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                  {entry.title}
                </h3>
                <p className="text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
                  {entry.text}
                </p>
                {i < journalEntries.length - 1 && (
                  <div className="mt-16 w-8 h-px bg-[var(--color-surface-hover)]" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
