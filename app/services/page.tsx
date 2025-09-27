// app/services/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, Shield, Users, DollarSign } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero (match homepage look) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Services</h1>
            <p className="mt-4 text-lg text-gray-600">
              Flexible nearshore teams that plug into your workflows. Start with one role or spin up a full pod.
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
              <div className="flex items-center gap-2"><Shield size={16}/> U.S.-grade compliance</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> Fast onboarding (1–3 wks)</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> HQ: Colombia / Puerto Rico</div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do (overview) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
          <p className="mt-3 text-gray-600">
            We recruit, vet, and manage high-caliber talent across finance, data/engineering, and operations.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="font-semibold">Analyst pods (Private Credit &amp; PE)</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={18}/> Research &amp; diligence support</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Portfolio monitoring &amp; reporting</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Compliance &amp; covenant tracking</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="font-semibold">Data &amp; Engineering squads</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={18}/> ETL, pipeline builds, data quality</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Dashboarding &amp; analytics</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> AI/ML support &amp; integrations</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="font-semibold">Finance operations</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={18}/> AR/AP, close support, reconciliations</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Management reporting &amp; RevOps</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Vendor &amp; contract administration</li>
              </ul>
            </div>

            <div className="rounded-2xl border p-5 bg-gradient-to-b from-white to-gray-50">
              <div className="font-semibold">Recruiting-as-a-Service (RaaS)</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle2 size={18}/> Full-cycle recruiting in LATAM</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> English screening &amp; culture fit</li>
                <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/why" className="underline">Why Fulcrum →</Link>
          </div>
        </div>
      </section>

      {/* Engagement models (same styling as homepage cards) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Engagement models</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="rounded-2xl border p-5 bg-white">
            <div className="font-semibold">Dedicated hires</div>
            <p className="mt-2 text-gray-600">
              Full-time team members embedded with you. We recruit, you manage. We handle payroll &amp; compliance.
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <div className="font-semibold">Managed pods</div>
            <p className="mt-2 text-gray-600">
              A pod of 2–6 specialists led by a Fulcrum lead. Outcome-oriented with weekly reporting.
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <div className="font-semibold">Project sprints</div>
            <p className="mt-2 text-gray-600">
              4–8 week sprints for audits, automations, or data builds. Fixed scope, fixed price.
            </p>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <div className="font-semibold">Build-Operate-Transfer</div>
            <p className="mt-2 text-gray-600">
              We stand up your nearshore team and transfer it in 6–12 months with training &amp; playbooks.
            </p>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-700">
          Prefer to start small? <span className="text-gray-900 font-medium">Begin with one role</span> and expand as outcomes grow.
        </div>
      </section>

      {/* Sample roles (compact, consistent card feel) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Sample roles</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {[
              "Credit Analyst",
              "Portfolio Monitoring Analyst",
              "Data Engineer",
              "Analytics Engineer",
              "Full-Stack Developer",
              "Operations Lead",
              "People Ops",
              "Technical Recruiter",
              "Sales Ops / RevOps",
            ].map((role) => (
              <div key={role} className="rounded-xl border p-3 bg-gradient-to-b from-white to-gray-50">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA & compliance strip (same tone as elsewhere) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
          <div className="font-medium">SLA &amp; guarantees</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><CheckCircle2 size={18}/> 3–5 qualified candidates per role within 7–10 business days</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
            <li className="flex gap-2"><CheckCircle2 size={18}/> Weekly status updates and pipeline transparency</li>
            <li className="flex gap-2"><Shield size={18}/> U.S.-grade compliance: background checks, NDAs, device policy</li>
          </ul>
          <div className="mt-4 text-sm">
            Want cost ranges? <Link href="/pricing" className="underline">See pricing →</Link>
          </div>
        </div>
      </section>

      {/* CTA (match buttons + spacing) */}
      <section className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Spin up a nearshore team in 1–3 weeks</h3>
              <p className="text-gray-600 mt-1 text-sm">We’ll share candidate samples and a simple plan for your first 30 days.</p>
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
