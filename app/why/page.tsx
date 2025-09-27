// app/why/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, Shield, Users, DollarSign } from "lucide-react";

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero (matches homepage spacing, fonts, styles) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Why <span className="underline decoration-4 decoration-amber-400 underline-offset-4">FulcrumLATAM</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              U.S. firms partner with us because we deliver high-caliber LATAM talent—fast—without
              compromising on quality, security, or culture fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
              >
                Book an intro call
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-gray-900 px-4 py-2 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-100"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16}/> U.S.-grade compliance</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> Fast onboarding (1–3 wks)</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> HQ: Colombia / Puerto Rico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos — Trusted by (same grid + per-logo controls as homepage) */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
            Trusted by leaders in finance, data, and operations
          </p>
          <ul
            className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6
              items-center justify-items-center gap-x-4 gap-y-4
              opacity-80
            "
            aria-label="Trusted by"
          >
            {[
              { src: "/logos/rule-1-ventures.png", alt: "Rule 1 Ventures", liClass: "h-16", imgClass: "max-h-16 md:max-h-16" },
              { src: "/logos/sio.png",              alt: "Sio",             liClass: "h-20", imgClass: "max-h-20 md:max-h-20" },
              { src: "/logos/co-counselor.png",     alt: "CoCounselor",     liClass: "h-18", imgClass: "max-h-21 md:max-h-21" },
              { src: "/logos/deckard.png",          alt: "Deckard",         liClass: "h-24", imgClass: "max-h-24 md:max-h-24" },
              { src: "/logos/merritt.png",          alt: "Merritt",         liClass: "h-20", imgClass: "max-h-20 md:max-h-19" },
              { src: "/logos/lendsmart.png",        alt: "Lendsmart",       liClass: "h-20", imgClass: "max-h-24 md:max-h-31" },
            ].map((logo) => (
              <li
                key={logo.alt}
                className={`flex items-center justify-center ${logo.liClass ?? "h-16"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`
                    w-auto object-contain
                    grayscale contrast-125 opacity-80
                    hover:opacity-100 transition
                    ${logo.imgClass ?? "max-h-12 md:max-h-16"}
                  `}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why pillars (same card styling as homepage "Why" section) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">What makes us different</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center"><Users size={20}/></div>
              <div className="mt-3 font-semibold">Top 5% talent</div>
              <p className="mt-1 text-gray-600 text-sm">Elite English, domain-specific skills, and strong U.S. work culture fit.</p>
            </div>
            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center"><DollarSign size={20}/></div>
              <div className="mt-3 font-semibold">50–70% savings</div>
              <p className="mt-1 text-gray-600 text-sm">Lower total cost without lowering the bar on quality or speed.</p>
            </div>
            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center"><Shield size={20}/></div>
              <div className="mt-3 font-semibold">Operational trust</div>
              <p className="mt-1 text-gray-600 text-sm">Compliance, IP, and security practices aligned to U.S. expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cred KPIs (matches your typography & spacing) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Avg. time-to-hire", value: "7–10 days" },
            { label: "Avg. savings vs U.S.", value: "50–70%" },
            { label: "Candidate pass rate", value: "3–5%" },
            { label: "12-month retention", value: "90%+*" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border p-6 bg-white">
              <div className="text-2xl font-semibold">{m.value}</div>
              <div className="mt-1 text-sm text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">
          *Retention varies by role, seniority, and engagement model.
        </p>
      </section>

      {/* How it works (same card style as elsewhere) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Scope & roles", desc: "Define outcomes, stack, seniority, and hours." },
              { n: "2", title: "Sourcing sprint", desc: "We source and pre-vet candidates across LATAM." },
              { n: "3", title: "Interview & select", desc: "You meet top picks; we handle offers and onboarding." },
              { n: "4", title: "Run & iterate", desc: "Weekly reporting, swap/replace options, scale as needed." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
                <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-semibold">{s.n}</div>
                <div className="mt-3 font-semibold">{s.title}</div>
                <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (same fonts / weights / spacing) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "How fast can we start?",
              a: "For common roles we typically present 3–5 qualified candidates within 7–10 business days."
            },
            {
              q: "Who is the employer of record?",
              a: "We can act as employer of record (payroll, benefits, compliance) or support your entity—your call."
            },
            {
              q: "What about security & IP?",
              a: "We align to your controls and standardize NDAs, background checks, device policies, and access management."
            },
            {
              q: "Can we start small and scale?",
              a: "Yes—start with 1 hire or a small pod; expand as outcomes and workload grow."
            },
            {
              q: "Do you work U.S. hours?",
              a: "Most team members work U.S. time zones; we align hours per role and SLA."
            },
          ].map((item) => (
            <details key={item.q} className="rounded-xl border p-4 bg-gradient-to-b from-white to-gray-50">
              <summary className="cursor-pointer font-medium">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact CTA + anchor (same button style) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Spin up a nearshore team in 1–3 weeks</h3>
              <p className="text-gray-600 mt-1 text-sm">We’ll share candidate samples and a simple plan for your first 30 days.</p>
            </div>
            <a href="#contact" className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium shadow-sm hover:opacity-90">
              Book an intro call
            </a>
          </div>
        </div>
      </section>

      {/* Inline contact anchor so the CTA works (you can embed a real form here later) */}
      <div id="contact" className="sr-only" aria-hidden="true" />
    </div>
  );
}
