// app/pricing/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Transparent{" "}
              <span className="underline decoration-4 decoration-amber-400 underline-offset-4">
                Pricing
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Monthly fees by seniority, with discounts for pods and longer commitments.
            </p>
            <p className="mt-2 text-base text-gray-500">
              Our structure keeps things simple: you pay a flat monthly rate based on role
              seniority, and we handle payroll, compliance, and HR administration. Larger
              pods (2–6 hires) and multi-quarter contracts qualify for volume discounts,
              giving you flexibility to scale while locking in cost savings. This means
              you can start small, prove value, and expand confidently without worrying
              about hidden fees or overhead surprises.
            </p>
      
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/#contact"
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
          </div>
        </div>
      </section>
      
      {/* Divider strip to match Talent page */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-6" />
      </section>
      
      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Transparent pricing</h2>
        <p className="mt-2 text-gray-600">Monthly fees by seniority. Discounts for pods and longer commitments.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 bg-white">
            <div className="text-sm uppercase tracking-wide text-gray-500">Junior</div>
            <div className="mt-1 text-2xl font-semibold">$2,500–$3,500/mo</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>Analysts, coordinators</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>1–2 yrs experience</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>English B2–C1</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <div className="text-sm uppercase tracking-wide text-gray-500">Mid</div>
            <div className="mt-1 text-2xl font-semibold">$4,000–$6,500/mo</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>Associates, engineers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>3–6 yrs experience</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>English C1</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <div className="text-sm uppercase tracking-wide text-gray-500">Senior</div>
            <div className="mt-1 text-2xl font-semibold">$7,000–$10,000+/mo</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>Leads, managers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>7+ yrs experience</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5" size={18}/>English C1–C2</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Costs include payroll, compliance, and HR support. Discounts available for pods (2–6 hires) and annual contracts.
        </p>
      </section>

      {/* SLA & guarantees */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
          <div className="font-medium">SLA &amp; guarantees</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle2 size={18}/> 3–5 qualified candidates per role within 7–10 business days</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Weekly status updates and pipeline transparency</li>
            <li className="flex gap-2"><Shield size={18}/> U.S.-grade compliance: background checks, NDAs, device policy</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            See <Link href="/talent" className="underline">talent pipeline →</Link> for example roles.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Ready to build your nearshore team?</h3>
              <p className="text-gray-600 mt-1 text-sm">We’ll share candidate samples and a tailored proposal within 1 business day.</p>
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
