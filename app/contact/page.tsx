// app/contact/page.tsx
"use client";

import { CheckCircle2, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Contact us</h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us what you need and we’ll reply within one business day with next steps and candidate samples.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + SLA */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Tell us what you need</h2>
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

        {/* SLA & direct email */}
        <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
          <div className="font-medium">SLA &amp; guarantees</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle2 size={18}/> 3–5 qualified candidates per role within 7–10 business days</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Weekly status updates and pipeline transparency</li>
            <li className="flex gap-2"><Shield size={18}/> U.S.-grade compliance: background checks, NDAs, device policy</li>
          </ul>
          <div className="mt-6 text-sm text-gray-600">
            Prefer email?{" "}
            <a className="underline" href="mailto:hello@fulcrumlatam.co">
              hello@fulcrumlatam.co
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Spin up a nearshore team in 1–3 weeks</h3>
              <p className="text-gray-600 mt-1 text-sm">
                We’ll share candidate samples and a simple plan for your first 30 days.
              </p>
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
