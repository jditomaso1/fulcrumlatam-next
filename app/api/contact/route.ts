// app/api/contact/route.ts
import { NextResponse } from "next/server";

function escape(s: string) {
  return s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message, hp } = body || {};

    // Basic spam honeypot
    if (hp) return NextResponse.json({ ok: true });

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json({ ok: false, error: "Slack not configured." }, { status: 500 });
    }

    // Construct a clean Slack Block message
    const text = `New contact request`;
    const blocks = [
      { type: "header", text: { type: "plain_text", text: "🆕 New Contact Request", emoji: true } },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${escape(name)}` },
          { type: "mrkdwn", text: `*Email:*\n${escape(email)}` },
          { type: "mrkdwn", text: `*Company:*\n${escape(company || "-")}` },
        ],
      },
      { type: "section", text: { type: "mrkdwn", text: `*Message:*\n${escape(message)}` } },
      {
        type: "context",
        elements: [
          { type: "mrkdwn", text: `🔔 Notifying: <U07J3A86PD0> <U07J0CQSGP7> <U07J373LSGK> <U08G6C9KGGH>` }
        ]
      },
      
      {
        type: "context",
        elements: [
          { type: "mrkdwn", text: `Source: ${escape(req.headers.get("origin") || "unknown")}` },
          { type: "mrkdwn", text: `User-Agent: ${escape(req.headers.get("user-agent") || "n/a")}` },
        ],
      },
    ];

    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, blocks }),
    });

    if (!res.ok) {
      const txt = await res.text();
      return NextResponse.json({ ok: false, error: `Slack error: ${txt}` }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
