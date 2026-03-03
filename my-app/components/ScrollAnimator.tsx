"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * スクロールアニメーション初期化コンポーネント
 * ページ遷移のたびに .reveal 要素を再監視する
 */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // ページ遷移後に一度リセットしてから監視
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    elements.forEach((el) => el.classList.remove("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]); // pathname が変わるたびに再実行

  return null;
}
