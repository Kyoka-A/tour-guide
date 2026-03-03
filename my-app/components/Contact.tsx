export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">

      {/* 背景グラデーション */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* セクションヘッダー */}
        <div className="text-center mb-12 reveal">
          <p className="text-sake-gold text-xs font-bold tracking-[0.4em] uppercase mb-3">
            Reserve Your Spot
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-stone-900 mb-5">
            Book the <span className="text-gold-gradient">Tour</span>
          </h2>
          <div className="w-16 h-0.5 bg-sake-gold mx-auto mb-6" />
          <p className="text-stone-500 text-sm">
            Pick a date that works for you. We&apos;ll confirm within 24 hours.
          </p>
        </div>

        {/* ===== メイン: カレンダー予定場所 ===== */}
        <div className="reveal bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden mb-8 flex items-center justify-center py-20">
          <p className="text-stone-400 text-lg font-semibold tracking-widest">Coming Soon...</p>
        </div>

        {/* ===== サブ: お問い合わせフォーム ===== */}
        <div className="reveal bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-8 py-5 border-b border-stone-100">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sake-gold text-sm flex-shrink-0">
              <i className="fa-regular fa-envelope" />
            </div>
            <div>
              <p className="text-stone-800 font-bold text-sm">Other Inquiries</p>
              <p className="text-stone-400 text-xs">Questions, dietary needs, special requests</p>
            </div>
          </div>
          <div className="px-8 py-10 flex flex-col items-center gap-5 text-center">
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
              Questions, dietary needs, special requests — fill out the form and we&apos;ll get back to you within 48 hours.
            </p>
            <a
              href="https://forms.gle/D9QyyGdVi9WjCP3E8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-sake-gold text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-sake-light hover:shadow-lg hover:shadow-sake-gold/25 active:scale-95 transition-all duration-300"
            >
              <i className="fa-solid fa-paper-plane" />
              Open Contact Form
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
