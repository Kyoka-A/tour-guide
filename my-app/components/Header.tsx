"use client";

import Link from "next/link";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/* ===== ナビゲーションリンク: パスを変更する場合はここを編集 ===== */
const navLinks = [
  { label: "About",    href: "/#about"   },
  { label: "Schedule", href: "/schedule" },
  { label: "Price",    href: "/price"    },
  { label: "Guide",    href: "/guide"    },
  { label: "Contact",  href: "/contact"  },
];

export default function Header() {
  const pathname  = usePathname();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* スクロール量でナビバーの背景を切り替え */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ページ遷移時にモバイルメニューを閉じる */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href.startsWith("/#") ? false : pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80"
          : "bg-white/80 backdrop-blur-sm border-b border-stone-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <NextImage
              src="/logo.png"
              alt="logo"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <div className="leading-tight">
              <span className="block text-[10px] font-semibold tracking-[0.35em] text-sake-gold uppercase">
                Okayama
              </span>
              <span className="block text-sm font-black tracking-widest text-stone-800 group-hover:text-sake-gold transition-colors duration-300">
                Sake Hop
              </span>
            </div>
          </Link>

          {/* デスクトップナビ */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-sake-gold font-semibold"
                      : "text-stone-500 hover:text-sake-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Now ボタン */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-sake-gold text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-sake-light hover:shadow-md hover:shadow-sake-gold/20 transition-all duration-300"
          >
            <i className="fa-regular fa-calendar text-xs" />
            Book Now
          </Link>

          {/* ハンバーガーボタン (モバイル) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-stone-600 hover:text-sake-gold transition-colors p-2"
            aria-label="メニューを開く"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-xl`} />
          </button>
        </nav>

        {/* モバイルメニュー */}
        <div
          className="md:hidden overflow-hidden border-t border-stone-100"
          style={{
            maxHeight: menuOpen ? "400px" : "0",
            opacity:   menuOpen ? 1 : 0,
            transition: "max-height 0.4s ease, opacity 0.4s ease",
          }}
        >
          <ul className="py-3 space-y-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(link.href)
                      ? "text-sake-gold bg-amber-50 font-semibold"
                      : "text-stone-600 hover:text-sake-gold hover:bg-amber-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 px-4 pb-2">
              <Link
                href="/contact"
                className="block w-full py-3 text-center bg-sake-gold text-white font-bold tracking-wider uppercase rounded-full hover:bg-sake-light transition-all text-sm"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
