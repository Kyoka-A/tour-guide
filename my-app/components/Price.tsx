export default function Price() {
  return (
    <section id="price" className="py-24 md:py-32 bg-amber-50 relative overflow-hidden">

      {/* 装飾的な背景グロー: 暖かいアンバー系のみ */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-16 reveal">
          <p className="text-sake-gold text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Transparent Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Price &amp; <span className="text-gold-gradient">System</span>
          </h2>
          <div className="w-16 h-0.5 bg-sake-gold mx-auto mb-6" />
          <p className="text-stone-500 max-w-xl mx-auto font-light">
            We believe in complete transparency. Here&apos;s exactly what you pay and why.
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">

          {/* ===== Guide Fee カード ===== */}
          <div className="reveal p-8 bg-white border border-amber-200 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-sake-gold/15 hover:border-sake-gold/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-sake-gold text-xl mb-5">
              <i className="fa-solid fa-shield-halved" />
            </div>
            {/* ガイド料金: ここを編集 */}
            <div className="flex items-end gap-2 mb-1">
              <span className="text-5xl font-black text-stone-900">¥4,000</span>
              <span className="text-stone-400 text-sm mb-2">/ person</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-4">Guide Fee</h3>
            <ul className="space-y-3">
              {[
                "Professional guiding & local expertise",
                "Reservation at each venue",
                "Full Sake lecture & explanation",
                "Japanese hospitality (Omotenashi)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-500 text-sm">
                  <i className="fa-solid fa-circle-check text-sake-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Food & Drink カード ===== */}
          <div className="reveal p-8 bg-white border border-amber-200 rounded-3xl shadow-sm hover:shadow-lg hover:shadow-orange-100 hover:border-orange-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 text-xl mb-5">
              <i className="fa-solid fa-utensils" />
            </div>
            {/* 飲食代目安: ここを編集 */}
            <div className="flex items-end gap-2 mb-1">
              <span className="text-3xl font-black text-stone-400">¥5,000</span>
              <span className="text-stone-300 text-sm mb-2">~ ¥7,000 (est.)</span>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Food &amp; Drink Cost</h3>
            <span className="inline-block px-3 py-1 bg-red-50 border border-red-200 text-red-400 text-xs font-bold tracking-wider rounded-full mb-4">
              NOT INCLUDED
            </span>
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              Actual food &amp; drink costs are pay-as-you-go at each venue. This
              is the authentic local way of experiencing izakaya culture.
            </p>

            {/* ===== 共通財布システムの説明: 暖かいアンバー系に統一 ===== */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-wallet text-sake-gold text-sm" />
                <span className="text-amber-700 text-xs font-bold tracking-wider uppercase">
                  Common Wallet System
                </span>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed mb-4">
                To make payment smooth and stress-free, we use a{" "}
                <strong className="text-stone-700">&quot;Common Wallet&quot; (共通財布)</strong>{" "}
                system. Everyone contributes to a shared pool. Your guide handles all
                Japanese payments — no awkward bill-splitting!
              </p>
              {/* ===== 図解画像プレースホルダー: ここを実際の画像に差し替え ===== */}
              <div className="w-full h-48 bg-amber-100 border-2 border-dashed border-amber-300 rounded-lg flex flex-col items-center justify-center gap-2 text-amber-500">
                <i className="fa-regular fa-image text-3xl" />
                <span className="text-xs font-medium">Common Wallet Diagram</span>
                <span className="text-[10px] text-amber-400">(Image Coming Soon)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 合計金額バナー */}
        <div className="reveal p-6 bg-white border border-sake-gold/30 rounded-3xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-sake-gold">
            <i className="fa-solid fa-lightbulb" />
          </div>
          <div>
            <p className="text-stone-800 font-bold text-sm mb-1">
              Total Budget Guide (per person)
            </p>
            {/* 合計金額: ここを編集 */}
            <p className="text-stone-500 text-sm">
              Guide fee{" "}
              <strong className="text-sake-gold font-bold">¥4,000</strong> + Food &amp; Drinks{" "}
              <strong className="text-sake-gold font-bold">¥5,000~7,000</strong> = Estimated total{" "}
              <strong className="text-stone-800 text-base font-black">¥9,000~11,000</strong>{" "}
              per person. A complete authentic Okayama evening.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
