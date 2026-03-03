import type { Metadata } from "next";
import { Montserrat, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header        from "@/components/Header";
import Footer        from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* ===== SEOメタデータ: タイトル・説明文を編集 ===== */
export const metadata: Metadata = {
  title: "Okayama Local Sake Night | 岡山 日本酒はしご酒ツアー",
  description:
    "An authentic sake hopping tour in Okayama led by a local expert. No tourist traps, just real local vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${notoSerifJP.variable}`}>
      <head>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        {/* スクロールアニメーション: ページ遷移ごとに再実行 */}
        <ScrollAnimator />
        <Header />
        {/* pt-16 md:pt-20 で固定ヘッダー分を確保 (Hero は内部で管理) */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
