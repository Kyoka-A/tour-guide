const timeline = [
  {
    time: "18:00",
    label: "START",
    labelCls: "bg-sake-gold text-white",
    dotBg: "bg-sake-gold shadow-md shadow-sake-gold/40",
    dotText: "text-white",
    icon: "fa-map-location-dot",
    cardCls: "border-stone-200 hover:border-sake-gold/40 hover:shadow-md hover:shadow-sake-gold/10",
    titleCls: "text-stone-800 group-hover:text-sake-gold",
    body: (
      <>
        We gather at the{" "}
        <strong className="text-stone-900">Central Gate (中央口)</strong> of
        Okayama Station. Easy to find, easy to start.
      </>
    ),
    tags: [],
  },
  {
    time: "18:15",
    label: "First Stop",
    labelCls: "bg-indigo-100 text-indigo-600 border border-indigo-200",
    dotBg: "bg-indigo-500 shadow-md shadow-indigo-200",
    dotText: "text-white",
    icon: "fa-beer-mug-empty",
    cardCls: "border-stone-200 hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-100",
    titleCls: "text-stone-800 group-hover:text-indigo-600",
    badge: { text: "角打ち", cls: "bg-indigo-50 border-indigo-200 text-indigo-600" },
    body: (
      <>
        Experience the authentic <em className="text-stone-700">&quot;kaku-uchi&quot;</em>{" "}
        culture — a Japanese tradition of drinking directly at a sake shop. We
        visit <strong className="text-stone-900">Miyashita Sake Brewery</strong>{" "}
        or <strong className="text-stone-900">Sobakichi</strong>.
      </>
    ),
    tags: [
      { icon: "fa-wine-glass",          label: "Craft Beer" },
      { icon: "fa-utensils",            label: "Starter Snack" },
      { icon: "fa-person-chalkboard",   label: "Local History" },
    ],
  },
  {
    time: "19:00",
    label: "Main Course",
    labelCls: "bg-amber-100 text-amber-700 border border-amber-200",
    dotBg: "bg-sake-gold shadow-md shadow-sake-gold/40",
    dotText: "text-white",
    icon: "fa-martini-glass-citrus",
    cardCls: "border-sake-gold/30 hover:border-sake-gold/60 hover:shadow-md hover:shadow-sake-gold/15 bg-amber-50/60",
    titleCls: "text-stone-800 group-hover:text-sake-gold",
    highlight: true,
    body: (
      <>
        Sit-down style at a curated local izakaya. Relax, taste, and learn.
        Your guide Kyoka will walk you through each Sake.
      </>
    ),
    bullets: [
      { head: "Sake Flight",   text: "Tasting comparison of 3 local Okayama sakes (junmai, ginjo, daiginjo)" },
      { head: "Sake Lecture",  text: "Your guide explains the brewing process & flavor profiles" },
      { head: "Food Pairing",  text: "Local Okayama dishes selected to complement each sake" },
    ],
    tags: [],
  },
  {
    time: "20:30",
    label: "OPTIONAL",
    labelCls: "bg-stone-100 text-stone-500 border border-stone-200",
    dotBg: "bg-stone-300 shadow-sm",
    dotText: "text-white",
    icon: "fa-moon",
    cardCls: "border-stone-200 hover:border-stone-300",
    titleCls: "text-stone-600",
    body: (
      <>
        The official tour concludes here — but the night is young! Feel free to
        stay at the izakaya, continue drinking, or explore more of Okayama&apos;s
        nightlife on your own.
      </>
    ),
    tags: [],
  },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* セクションヘッダー */}
        <div className="text-center mb-20 reveal">
          <p className="text-sake-gold text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Tour Itinerary
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Schedule &amp; <span className="text-gold-gradient">Itinerary</span>
          </h2>
          <div className="w-16 h-0.5 bg-sake-gold mx-auto mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto font-light leading-relaxed">
            A curated evening through Okayama&apos;s hidden local spots.
            Duration: approx. 2.5 hours.
          </p>
        </div>

        {/* タイムライン: 絶対配置廃止・モバイルはドット+時刻を横一行で表示 */}
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-12 reveal"
            >
              {/* ===== モバイル専用: ドット + ラベル + 時刻 横並び ===== */}
              <div className="flex items-center gap-4 md:hidden">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg ${item.dotBg} ${item.dotText}`}>
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider rounded-full mb-1 ${item.labelCls}`}>
                    {item.label}
                  </span>
                  {/* 時刻テキスト: text-stone-700 で視認性確保 */}
                  <div className="text-2xl font-black text-stone-700 font-serif">{item.time}</div>
                </div>
              </div>

              {/* ===== デスクトップ専用: 時刻ブロック (右寄せ) ===== */}
              <div className="hidden md:block flex-shrink-0 w-1/3 text-right">
                <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider rounded-full mb-2 ${item.labelCls}`}>
                  {item.label}
                </span>
                <div className="text-4xl font-black text-stone-600 font-serif">{item.time}</div>
              </div>

              {/* ===== デスクトップ専用: 中央ドット ===== */}
              <div className={`hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center text-lg ${item.dotBg} ${item.dotText}`}>
                <i className={`fa-solid ${item.icon}`} />
              </div>

              {/* カード */}
              <div className={`flex-1 p-6 bg-white border rounded-2xl transition-all duration-300 group relative overflow-hidden ${item.cardCls}`}>
                {item.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2.5 py-1 bg-sake-gold text-white font-bold rounded-full">
                      ★ HIGHLIGHT
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className={`text-lg font-bold transition-colors ${item.titleCls}`}>
                    {item.title || (idx === 0 ? "Meet at Okayama Station" : idx === 1 ? '"Kaku-uchi" Style Standing Bar' : idx === 2 ? 'Main Izakaya "Ichizen" — 一善' : "Free to Stay & Explore")}
                  </h3>
                  {item.badge && (
                    <span className={`text-xs px-2 py-0.5 border rounded-full font-medium ${item.badge.cls}`}>
                      {item.badge.text}
                    </span>
                  )}
                </div>

                <p className="text-stone-500 text-sm leading-relaxed mb-3">{item.body}</p>

                {item.bullets && (
                  <ul className="space-y-2 text-sm mt-4">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-500">
                        <i className="fa-solid fa-check text-sake-gold mt-0.5 flex-shrink-0" />
                        <span>
                          <strong className="text-stone-700">{b.head}</strong> — {b.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-stone-100 rounded-full text-stone-500 border border-stone-200">
                        <i className={`fa-solid ${tag.icon} mr-1 text-sake-gold`} />
                        {tag.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
