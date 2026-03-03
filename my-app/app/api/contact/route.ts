import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { lastName, firstName, email, subject, message } = await req.json();

  /* ===== 必須項目チェック ===== */
  if (!lastName || !firstName || !email || !subject) {
    return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
  }

  /* ===== Gmail SMTP 設定 ===== */
  /* .env.local に GMAIL_USER と GMAIL_APP_PASSWORD を設定してください */
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      /* ===== 送信先: あなたのメールアドレス ===== */
      from: `"Okayama Local Sake Night" <${process.env.GMAIL_USER}>`,
      to:   "myname.is.akita@gmail.com",
      replyTo: email,
      subject: `【お問い合わせ】${subject} — ${lastName} ${firstName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#c9a84c;border-bottom:2px solid #c9a84c;padding-bottom:8px;">
            Okayama Local Sake Night — お問い合わせ
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr style="background:#fdf9f3;">
              <td style="padding:10px 14px;font-weight:bold;color:#57534e;width:140px;">お名前</td>
              <td style="padding:10px 14px;color:#1c1917;">${lastName} ${firstName}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#57534e;">メールアドレス</td>
              <td style="padding:10px 14px;color:#1c1917;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background:#fdf9f3;">
              <td style="padding:10px 14px;font-weight:bold;color:#57534e;">用件</td>
              <td style="padding:10px 14px;color:#1c1917;">${subject}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;font-weight:bold;color:#57534e;vertical-align:top;">メッセージ</td>
              <td style="padding:10px 14px;color:#1c1917;white-space:pre-wrap;">${message || "（なし）"}</td>
            </tr>
          </table>
          <p style="color:#a8a29e;font-size:12px;margin-top:24px;">
            このメールは Okayama Local Sake Night サイトのお問い合わせフォームから送信されました。
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("メール送信エラー:", err);
    return NextResponse.json({ error: "送信に失敗しました。" }, { status: 500 });
  }
}
