// app/talent/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, Shield, Users, DollarSign } from "lucide-react";

export default function TalentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              <span className="underline decoration-4 decoration-amber-400 underline-offset-4">
                Talent
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We maintain active pipelines across finance, data/engineering, and
              operations—screened for English, technical depth, and culture fit.
            </p>
            <p className="mt-2 text-base text-gray-500">
              Every candidate goes through a structured vetting process: English and
              communication screening, technical/case exercises, and reference checks.
              Only the top 3–5% move forward to client interviews. This ensures you
              gain access to professionals who not only meet technical requirements
              but also integrate seamlessly into U.S. workflows and time zones.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
              >
                Book an intro call
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-gray-900 px-4 py-2 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-100"
              >
                View pricing
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield size={16} /> U.S.-grade compliance
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full border" /> English-screened (B2–C2)
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full border" /> U.S. time zones
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample roles (same card feel) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Example roles</h2>
          <p className="mt-3 text-gray-600">
            Start with one hire or spin up a small pod, then scale as outcomes grow.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              "Credit Analyst",
              "Portfolio Monitoring Analyst",
              "Data Engineer",
              "Analytics Engineer",
              "Full-Stack Developer",
              "QA / Test Engineer",
              "Operations Lead",
              "People Ops",
              "Technical Recruiter",
              "Sales Ops / RevOps",
              "Finance Ops (AR/AP)",
              "Reporting Analyst",
            ].map((role) => (
              <div key={role} className="rounded-xl border p-3 bg-gradient-to-b from-white to-gray-50">
                {role}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="underline">See what we do →</Link>
          </div>
        </div>
      </section>

      {/* How we vet (matches homepage styling) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">How we vet</h2>
            <ol className="mt-4 list-decimal list-inside text-sm text-gray-700 space-y-1">
              <li>Profile review &amp; skills screen</li>
              <li>English &amp; communication interview</li>
              <li>Technical / case exercise</li>
              <li>Reference &amp; background checks</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              Only a small percentage advance to client interviews. Replacement guarantee during probation.
            </p>
          </div>
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
            <div className="font-medium">Engagement options</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><CheckCircle2 size={18}/> Dedicated hires (you manage)</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Managed pods (2–6 specialists)</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Project sprints (4–8 weeks)</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Build-Operate-Transfer</li>
            </ul>
            <div className="mt-4 text-sm">
              New to nearshore? <Link href="/why" className="underline">Why Fulcrum →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & hours strip */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-700 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>Primary hubs: Colombia · Puerto Rico · Mexico · Argentina · Brazil</span>
          <span>Coverage: U.S. time zones with overlap for EST–PST</span>
        </div>
      </section>

      {/* Candidate pipeline KPIs */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Screen-to-offer rate", value: "3–5%" },
            { label: "Avg. time-to-slate", value: "7–10 days" },
            { label: "Avg. acceptance rate", value: "70–85%" },
            { label: "12-month retention", value: "90%+*" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border p-6 bg-white">
              <div className="text-2xl font-semibold">{m.value}</div>
              <div className="mt-1 text-sm text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">*Varies by role, seniority, and engagement model.</p>
      </section>

      {/* Security & compliance (compact reassurance) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
          <div className="font-medium">Security &amp; compliance</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><Shield size={18}/> Background checks &amp; NDAs standard</li>
            <li className="flex gap-2"><Shield size={18}/> Device policy &amp; access management aligned to client controls</li>
            <li className="flex gap-2"><Shield size={18}/> Data handling and confidentiality best practices</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            See <Link href="/pricing" className="underline">pricing</Link> and <Link href="/services" className="underline">services</Link> for engagement details.
          </div>
        </div>
      </section>

      {/* CTA (match buttons + spacing) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to meet candidates?</h3>
              <p className="text-gray-600 mt-1 text-sm">We’ll send 3–5 profiles for your target role within 7–10 business days.</p>
            </div>
            <a
              href="/#contact"
              className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium shadow-sm hover:opacity-90"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
