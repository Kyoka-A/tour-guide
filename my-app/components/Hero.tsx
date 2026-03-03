/**
 * ヒーローセクション
 * 背景画像URLは src= の値を差し替えて変更する
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== 背景画像: URLをここで差し替え ===== */}
      <div className="absolute inset-0">
        <img
          src="/top.png"
          alt="日本酒の雰囲気ある居酒屋"
          className="w-full h-full object-cover object-center"
        />
        {/* 暗いオーバーレイ: 上は暗く、下はAboutセクション(白)につながるようクリームへ */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/40 to-stone-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-transparent" />
      </div>

      {/* 装飾的な光の円 */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sake-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* ヒーローコンテンツ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">

        {/* 日本語タグライン */}
        <div className="inline-flex items-center gap-3 mb-7 px-4 py-2 border border-white/20 rounded-full bg-white/8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sake-gold animate-pulse" />
          <span className="text-white/80 text-xs font-semibold tracking-[0.3em] uppercase font-serif">
            岡山 日本酒はしご酒ツアー
          </span>
        </div>

        {/* ===== メインヘッドライン: ここを編集 ===== */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-white">
          Taste Real Okayama
          <br />
          <span className="text-gold-gradient">with a Local Expert.</span>
        </h1>

        {/* ===== サブヘッドライン: ここを編集 ===== */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
          An authentic Sake hopping tour in Okayama.
          <br className="hidden md:block" />
          No tourist traps, just{" "}
          <em className="text-white/90 not-italic font-semibold">real local vibes.</em>
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-4 bg-sake-gold text-white font-bold text-sm tracking-widest uppercase rounded-full flex items-center gap-2 hover:bg-sake-light hover:shadow-xl hover:shadow-sake-gold/30 hover:scale-105 transition-all duration-300"
          >
            <i className="fa-solid fa-wine-bottle" />
            Join the Tour
          </a>
          <a
            href="#price"
            className="px-8 py-4 border border-white/30 text-white/80 font-semibold text-sm tracking-widest uppercase rounded-full hover:border-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
          >
            See Pricing
          </a>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
