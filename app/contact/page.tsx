"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // TODO: replace with your real inbox
  const RECIPIENT = "hello@fulcrumlatam.co";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`FulcrumLATAM — Inquiry from ${name || "Website"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    // Opens the user's email client with a prefilled message
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-8 text-lg">
        Tell us what you’re hiring for and your timing. We’ll respond quickly with next steps.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="company">Company</label>
            <input
              id="company"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company, fund, or team"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full min-h-[140px] rounded-xl border px-3 py-2 outline-none focus:ring-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What roles or skills are you hiring for? Timeline? Team size?"
              required
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
          >
            Send email
          </button>

          <p className="text-xs text-gray-500">
            This uses your email client via <code>mailto:</code>. For a server-side handler (API route),
            we can wire one up later.
          </p>
        </form>

        {/* Alt contact / details */}
        <aside className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Other ways to reach us</h2>
          <ul className="space-y-2 text-gray-700">
            <li><span className="font-medium">Email:</span> {RECIPIENT}</li>
            <li><span className="font-medium">Response time:</span> usually same day</li>
            <li><span className="font-medium">Hours:</span> Mon–Fri, 9am–6pm (ET)</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">What to include</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li>Role(s) and core tools/tech</li>
              <li>Experience range and headcount</li>
              <li>Timeline and budget range</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
