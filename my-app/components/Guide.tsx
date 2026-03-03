/* ===== ガイドプロフィールデータ: 名前・役割・紹介文・タグを編集 ===== */
const guides = [
  {
    id: "kenneth",
    name: "Kenneth",
    role: "Main Host / Navigator",
    roleColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    accentColor: "from-sky-300 to-indigo-400",
    ringColor: "ring-indigo-400",
    tagBg: "bg-indigo-50 border-indigo-200 text-indigo-600",
    dividerColor: "bg-indigo-300",
    /* ===== プロフィール画像: src を実際の写真に差し替え ===== */
    photo: "/Kenneth.jfif",
    photoAlt: "Kenneth - Main Host",
    /* ===== 自己紹介文: ここを編集 ===== */
    bio: "Half-Canadian and Half-Japanese. Having grown up with two cultures, I bridge the gap between you and local Okayama. No language barrier here — let's talk about everything!",
    /* ===== タグ: ここを編集 ===== */
    tags: ["🇨🇦 Canadian-Japanese", "🗣️ Native English", "🌏 Bilingual"],
    keyStrength: "English Friendly",
    keyIcon: "fa-comments",
    highlight: "No language barrier",
  },
  {
    id: "kyoka",
    name: "Kyoka",
    role: "Sake Expert",
    roleColor: "bg-amber-100 text-amber-700 border-amber-200",
    accentColor: "from-amber-400 to-orange-500",
    ringColor: "ring-amber-400",
    tagBg: "bg-amber-50 border-amber-200 text-amber-700",
    dividerColor: "bg-amber-300",
    /* ===== プロフィール画像: src を実際の写真に差し替え ===== */
    photo: "/Kyoka.jpg",
    photoAlt: "Kyoka - Sake Expert",
    /* ===== 自己紹介文: ここを編集 ===== */
    bio: "I am an artist and a Sake enthusiast. I may rely on my husband for English, but I speak the language of Sake fluently! I will teach you how to taste and enjoy real Japanese Sake.",
    /* ===== タグ: ここを編集 ===== */
    tags: ["🍶 Sake Connoisseur", "🎨 Web Designer", "🇯🇵 Okayama Local"],
    keyStrength: "Deep Expertise",
    keyIcon: "fa-star",
    highlight: "Sake specialist",
  },
];

export default function Guide() {
  return (
    <section
      id="guide"
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      {/* 装飾的な背景サークル */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      {/* 薄い和柄テクスチャ */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #92400e 0, #92400e 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ===== セクションヘッダー ===== */}
        <div className="text-center mb-6 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-300 rounded-full text-amber-700 text-xs font-bold tracking-widest uppercase mb-5">
            <i className="fa-solid fa-heart text-orange-400" />
            Local Hosts
          </span>
          {/* ===== セクションタイトル: ここを編集 ===== */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-charcoal-900 mb-4">
            Meet Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #d97706 0%, #ea580c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Local Hosts
            </span>
          </h2>
          {/* ===== サブタイトル: ここを編集 ===== */}
          <p className="text-stone-500 text-base md:text-lg font-light max-w-lg mx-auto leading-relaxed">
            A perfect team of a{" "}
            <strong className="text-indigo-600 font-semibold">Native English Speaker</strong>
            {" "}&amp;{" "}
            <strong className="text-amber-600 font-semibold">Sake Specialist</strong>.
          </p>
        </div>

        {/* English Friendly + Expertise ハイライトバー */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-14">
          <div className="flex items-center gap-2 px-4 py-2 bg-sky-100 border border-sky-300 text-sky-700 text-sm font-semibold rounded-full">
            <i className="fa-solid fa-comments" />
            No Language Barrier
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-500 text-sm rounded-full border border-stone-200">
            <i className="fa-solid fa-plus text-stone-300" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 border border-amber-300 text-amber-700 text-sm font-semibold rounded-full">
            <i className="fa-solid fa-wine-glass" />
            Real Sake Knowledge
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-500 text-sm rounded-full border border-stone-200">
            <i className="fa-solid fa-equals text-stone-300" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-sake-gold text-white text-sm font-bold rounded-full shadow-md shadow-sake-gold/30">
            <i className="fa-solid fa-star" />
            Perfect Tour
          </div>
        </div>

        {/* プロフィールカード グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="reveal bg-white rounded-3xl shadow-xl shadow-stone-200/60 overflow-hidden hover:shadow-2xl hover:shadow-stone-300/60 hover:-translate-y-1 transition-all duration-400 group"
            >
              {/* カード上部: グラデーション帯 + 写真 */}
              <div className={`relative h-36 bg-gradient-to-br ${guide.accentColor}`}>
                {/* 装飾的な波紋 */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/30 rounded-full translate-x-1/4 translate-y-1/4" />
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/4 -translate-y-1/4" />
                </div>
                {/* "キーワード" ラベル */}
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                    <i className={`fa-solid ${guide.keyIcon} text-white`} />
                    {guide.keyStrength}
                  </span>
                </div>
                {/* 円形プロフィール写真 */}
                <div className="absolute bottom-0 left-8 translate-y-1/2">
                  <div
                    className={`w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-xl`}
                  >
                    <img
                      src={guide.photo}
                      alt={guide.photoAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* カード本文 */}
              <div className="pt-16 pb-7 px-7">
                {/* 名前 & ロールバッジ */}
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <h3 className="text-2xl font-black text-charcoal-900">
                    {guide.name}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 border rounded-full font-semibold ${guide.roleColor}`}
                  >
                    {guide.role}
                  </span>
                </div>

                {/* ハイライトテキスト */}
                <p className="text-xs text-stone-400 font-medium mb-4 tracking-wide">
                  <i className="fa-solid fa-location-dot mr-1 text-stone-300" />
                  Okayama, Japan
                </p>

                {/* 区切り線 */}
                <div className={`w-10 h-0.5 ${guide.dividerColor} rounded mb-4`} />

                {/* 自己紹介文 */}
                <blockquote className="text-stone-600 text-sm leading-relaxed italic mb-5 relative pl-4 border-l-2 border-stone-200">
                  &ldquo;{guide.bio}&rdquo;
                </blockquote>

                {/* タグ */}
                <div className="flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1.5 border rounded-full font-medium ${guide.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* カード下部: ハイライトフッター */}
              <div className={`px-7 py-3 bg-stone-50 border-t border-stone-100 flex items-center gap-2`}>
                <i className={`fa-solid fa-circle-check text-sm`}
                   style={{ color: guide.id === "kenneth" ? "#6366f1" : "#f59e0b" }}
                />
                <span className="text-stone-500 text-xs">
                  {guide.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 下部メッセージ */}
        <div className="reveal mt-12 text-center">
          <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
            <i className="fa-solid fa-handshake text-amber-400 mr-2" />
            Together, they make sure every guest feels{" "}
            <strong className="text-stone-700">understood, welcomed, and amazed</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
