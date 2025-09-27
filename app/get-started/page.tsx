// app/get-started/page.tsx
"use client";

import { CheckCircle2 } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              <span className="underline decoration-4 decoration-amber-400 underline-offset-4">
                Get started
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Ready to spin up a nearshore team? Share a few details and we’ll send
              candidate samples plus a simple 30-day plan within one business day.
            </p>
            <p className="mt-2 text-base text-gray-500">
              From the moment you reach out, our team begins sourcing against your
              requirements—seniority, skills, time zone coverage, and cultural fit.
              Within 7–10 business days, you’ll receive a curated slate of candidates,
              along with an onboarding roadmap that outlines your first 30 days. This
              way, you can move from inquiry to impact without wasting weeks in
              recruiting cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Quick steps */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "1", title: "Tell us your needs", desc: "What roles, skills, or pod structure you’re looking for." },
            { n: "2", title: "See candidate samples", desc: "Within 7–10 business days we’ll share 3–5 qualified profiles." },
            { n: "3", title: "Launch in weeks", desc: "Onboard quickly with our payroll & compliance support." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">
                {s.n}
              </div>
              <div className="mt-3 font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Get started now</h2>
            <form className="mt-6 grid grid-cols-1 gap-3">
              <input className="rounded-xl border px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border px-4 py-3" placeholder="Work email" type="email" />
              <input className="rounded-xl border px-4 py-3" placeholder="Company" />
              <textarea
                className="rounded-xl border px-4 py-3"
                placeholder="What roles or pod are you trying to fill?"
                rows={4}
              />
              <button
                type="button"
                className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium shadow-sm hover:opacity-90 inline-flex items-center gap-2"
              >
                Submit inquiry
              </button>
              <p className="text-xs text-gray-500">
                By submitting, you agree to be contacted about FulcrumLATAM services.
              </p>
            </form>
          </div>

          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
            <div className="font-medium">What you can expect</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><CheckCircle2 size={18}/> 3–5 qualified candidates per role</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Candidate samples within 7–10 business days</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Weekly status updates &amp; transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Spin up a nearshore team in 1–3 weeks</h3>
              <p className="text-gray-600 mt-1 text-sm">We’ll share candidate samples and a tailored 30-day plan.</p>
            </div>
            <a
              href="/contact"
              className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium shadow-sm hover:opacity-90"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
