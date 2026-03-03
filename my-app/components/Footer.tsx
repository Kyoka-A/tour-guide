/* ===== SNSリンク: hrefを実際のアカウントURLに変更 ===== */
const socialLinks = [
  { icon: "fa-brands fa-instagram", label: "Instagram", href: "#" },
  { icon: "fa-brands fa-facebook-f", label: "Facebook",  href: "#" },
  { icon: "fa-brands fa-x-twitter",  label: "X (Twitter)", href: "#" },
  { icon: "fa-regular fa-envelope",  label: "Email", href: "mailto:hello@okayama-sake-night.com" },
];

const navLinks = [
  { label: "About",   href: "#about" },
  { label: "Price",   href: "#price" },
  { label: "Guide",   href: "#guide" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-50 border-t-4 border-sake-gold">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* ロゴ */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-2xl">🍶</span>
            <div>
              <div className="text-[10px] font-bold tracking-[0.35em] text-sake-gold uppercase">
                Okayama
              </div>
              <div className="text-sm font-black tracking-widest text-stone-800 group-hover:text-sake-gold transition-colors duration-300">
                Local Sake Night
              </div>
            </div>
          </a>

          {/* ナビ */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-stone-400 tracking-widest uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-sake-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* SNSアイコン */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-sake-gold hover:border-sake-gold/40 hover:shadow-sm transition-all duration-300"
              >
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-400 text-xs">
          {/* ===== コピーライト: 年・名前を編集 ===== */}
          <p>&copy; 2025 Okayama Local Sake Night. All rights reserved.</p>
          <p className="font-serif text-stone-300">岡山 日本酒はしご酒ツアー</p>
        </div>
      </div>
    </footer>
  );
}
