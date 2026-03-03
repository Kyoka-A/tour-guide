import Link from "next/link";

/* ===== コンセプトページのハイライトポイント: テキストをここで編集 ===== */
const points = [
  {
    icon: "fa-map-pin",
    title: "Hidden Local Spots",
    body: "We take you to izakayas that tourists can't find alone — places only locals know.",
  },
  {
    icon: "fa-wine-glass",
    title: "Learn About Sake",
    body: "Taste and compare real Okayama sake with a guide who explains every sip.",
  },
  {
    icon: "fa-people-group",
    title: "Make Real Connections",
    body: "Share a table, share a drink, share a memory. That's the Japanese way.",
  },
];

export default function Concept() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== セクションヘッダー ===== */}
        <div className="text-center mb-16 reveal">
          <p className="text-sake-gold text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Our Philosophy
          </p>
          {/* ===== メインヘッディング: ここを編集 ===== */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-5 leading-tight">
            Not just drinking,
            <br />
            <span className="text-gold-gradient">it&apos;s a culture.</span>
          </h2>
          <div className="w-16 h-0.5 bg-sake-gold mx-auto mb-6" />
          {/* ===== サブヘッディング: ここを編集 ===== */}
          <p className="text-stone-500 text-lg font-light max-w-xl mx-auto leading-relaxed">
            Experience the real Okayama nightlife with locals.
          </p>
        </div>

        {/* ===== メインコンテンツ: テキスト + 画像 (2カラム) ===== */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 reveal">

          {/* テキストサイド */}
          <div>
            {/* ===== 本文テキスト: ここを編集 ===== */}
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              We guide you to hidden Izakayas that tourists can&apos;t find alone.
              Learn about Sake, taste local food, and make friends.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              In Japan, the izakaya is more than a bar — it&apos;s a place where people
              let down their guard, share food, and become friends over a glass of sake.
              We want you to feel that. Not as a tourist, but as a guest of Okayama.
            </p>

            {/* "Check Schedule" ボタン */}
            <Link
              href="/schedule"
              className="inline-flex items-center gap-3 px-8 py-4 bg-sake-gold text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-sake-light hover:shadow-xl hover:shadow-sake-gold/30 hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-calendar-days" />
              Check Schedule
            </Link>
          </div>

          {/* ===== 画像エリア: この div を <img> タグに差し替え ===== */}
          <div className="w-full aspect-video bg-stone-100 border-2 border-dashed border-stone-300 rounded-3xl flex flex-col items-center justify-center gap-3 text-stone-400 shadow-inner">
            <i className="fa-regular fa-image text-4xl" />
            <span className="text-sm font-medium">Tour Atmosphere Image</span>
            <span className="text-xs text-stone-300">(Image Coming Soon)</span>
          </div>
        </div>

        {/* ===== ハイライトポイント 3列 ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className="reveal p-6 bg-amber-50 border border-amber-100 rounded-2xl hover:border-sake-gold/40 hover:shadow-md hover:shadow-sake-gold/10 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-sake-gold text-lg mb-4 group-hover:bg-sake-gold group-hover:text-white transition-all duration-300">
                <i className={`fa-solid ${pt.icon}`} />
              </div>
              {/* ===== ポイントのタイトル・説明: ここを編集 ===== */}
              <h3 className="text-stone-800 font-bold mb-2">{pt.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{pt.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
