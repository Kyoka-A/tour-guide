"use client";

import { useState, FormEvent } from "react";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending,   setSending]   = useState(false);
  const [error,     setError]     = useState("");

  /* ===== フォーム送信: /api/contact へ POST ===== */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const body = {
      lastName:  (form.elements.namedItem("lastName")  as HTMLInputElement).value,
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      email:     (form.elements.namedItem("email")     as HTMLInputElement).value,
      subject:   (form.elements.namedItem("subject")   as HTMLSelectElement).value,
      message:   (form.elements.namedItem("message")   as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(body),
    });

    setSending(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      const data = await res.json();
      setError(data.error || "送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

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

        {/* ===== メイン: Calendly インラインウィジェット ===== */}
        <div className="reveal bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden mb-8">
          {/* ===== Calendly URL: YOUR_LINK を実際のCalendlyリンクに差し替え ===== */}
          <InlineWidget
            url="https://calendly.com/YOUR_LINK"
            styles={{ height: "700px", minWidth: "320px" }}
          />
        </div>

        {/* ===== サブ: その他の質問フォーム (アコーディオン) ===== */}
        <div className="reveal">
          <details className="group bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden">
            <summary className="flex items-center justify-between px-8 py-5 cursor-pointer select-none list-none">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sake-gold text-sm flex-shrink-0">
                  <i className="fa-regular fa-envelope" />
                </div>
                <div>
                  <p className="text-stone-800 font-bold text-sm">Other Inquiries</p>
                  <p className="text-stone-400 text-xs">Questions, dietary needs, special requests</p>
                </div>
              </div>
              {/* アコーディオン矢印 */}
              <i className="fa-solid fa-chevron-down text-stone-400 text-sm transition-transform duration-300 group-open:rotate-180" />
            </summary>

            {/* フォーム本体 */}
            <div className="px-8 pb-8 pt-2 border-t border-stone-100">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-3">🍶</div>
                  <h3 className="text-lg font-black text-stone-900 mb-2">Message Sent!</h3>
                  <p className="text-stone-500 text-sm">
                    We&apos;ll reply within 24 hours.{" "}
                    <span className="font-serif text-stone-400">ありがとうございます！</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">

                  {/* Last Name / First Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-600 text-xs font-semibold tracking-wider uppercase mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Yamada"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-sake-gold focus:ring-2 focus:ring-sake-gold/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 text-xs font-semibold tracking-wider uppercase mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Taro"
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-sake-gold focus:ring-2 focus:ring-sake-gold/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-stone-600 text-xs font-semibold tracking-wider uppercase mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-sake-gold focus:ring-2 focus:ring-sake-gold/20 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-stone-600 text-xs font-semibold tracking-wider uppercase mb-1.5">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm focus:outline-none focus:border-sake-gold focus:ring-2 focus:ring-sake-gold/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Please select...</option>
                      <option value="Question about the tour">Question about the tour</option>
                      <option value="Pricing & Booking">Pricing &amp; Booking</option>
                      <option value="Dietary restrictions / Allergies">Dietary restrictions / Allergies</option>
                      <option value="Group booking">Group booking</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-stone-600 text-xs font-semibold tracking-wider uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Please provide any details here."
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-sm placeholder-stone-300 focus:outline-none focus:border-sake-gold focus:ring-2 focus:ring-sake-gold/20 transition-all resize-none"
                    />
                  </div>

                  {/* エラー表示 */}
                  {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-xl py-3 px-4">
                      <i className="fa-solid fa-triangle-exclamation mr-2" />
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 bg-sake-gold text-white font-black text-sm tracking-widest uppercase rounded-full hover:bg-sake-light hover:shadow-lg hover:shadow-sake-gold/25 active:scale-95 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <i className="fa-solid fa-circle-notch animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-stone-400 text-xs">
                    We&apos;ll respond within 24 hours
                  </p>
                </form>
              )}
            </div>
          </details>
        </div>

      </div>
    </section>
  );
}
