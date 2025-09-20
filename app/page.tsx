// app/page.tsx
"use client";

import { CheckCircle2, Shield, Users, DollarSign } from "lucide-react";
import Link from "next/link";

export default function FulcrumLatamLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Nearshore teams that move <span className="underline decoration-4 decoration-amber-400 underline-offset-4">faster</span> and cost <span className="underline decoration-4 decoration-amber-400 underline-offset-4">less</span>.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              FulcrumLATAM recruits, vets, and manages high-caliber talent in Colombia and across LATAM for U.S. firms—finance, data, engineering, operations, and more.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90">
                Book an intro call 
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-2xl bg-white text-gray-900 px-4 py-2 text-sm font-medium ring-1 ring-gray-200 hover:bg-gray-100">
                Explore services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16}/> U.S.-grade compliance</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> Fast onboarding (1–3 wks)</div>
              <div className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full border" /> HQ: Colombia / Puerto Rico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos — Trusted by */}
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
              // Per-logo controls:
              // - liClass: controls the CELL height (alignment box)
              // - imgClass: controls the IMAGE max height
              { src: "/logos/rule-1-ventures.png", alt: "Rule 1 Ventures", liClass: "h-16", imgClass: "max-h-16 md:max-h-16" },
              { src: "/logos/sio.png",              alt: "Sio",             liClass: "h-20", imgClass: "max-h-20 md:max-h-20" },
              { src: "/logos/co-counselor.png",     alt: "CoCounselor",     liClass: "h-18", imgClass: "max-h-21 md:max-h-21" }, // bigger
              { src: "/logos/deckard.png",          alt: "Deckard",         liClass: "h-22", imgClass: "max-h-26 md:max-h-24" },
              { src: "/logos/merritt.png",          alt: "Merritt",         liClass: "h-20", imgClass: "max-h-20 md:max-h-19" },
              { src: "/logos/lendsmart.png",        alt: "Lendsmart",       liClass: "h-19", imgClass: "max-h-24 md:max-h-31" }, // smaller
            ].map((logo) => (
              <li
                key={logo.alt}
                className={`flex items-center justify-center ${logo.liClass ?? "h-16"}`}
              >
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

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
            <p className="mt-3 text-gray-600">Flexible nearshore solutions that plug into your existing workflows. Hire one role or spin up a full pod.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5" size={18}/><span>Analyst pods for private credit &amp; PE (research, monitoring, compliance)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5" size={18}/><span>Data &amp; engineering squads (ETL, dashboards, AI/ML support)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5" size={18}/><span>Finance ops (accounts, reporting, close support, RevOps)</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5" size={18}/><span>Talent acquisition &amp; HR ops (recruiting-as-a-service)</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
            <h3 className="font-medium">Engagement models</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Dedicated hires</div>
                <p className="mt-1 text-gray-600">Full-time team members embedded with you. We recruit, you manage. We handle payroll &amp; compliance.</p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Managed pods</div>
                <p className="mt-1 text-gray-600">A pod of 2–6 specialists led by a Fulcrum team lead. Outcome-oriented with weekly reporting.</p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Project sprints</div>
                <p className="mt-1 text-gray-600">4–8 week sprints for audits, automation, or data builds. Fixed scope, fixed price.</p>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-semibold">Build-Operate-Transfer</div>
                <p className="mt-1 text-gray-600">We stand up your nearshore team and transfer it in 6–12 months with training &amp; playbooks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Fulcrum</h2>
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
      </section>

      {/* Talent */}
      <section id="talent" className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Talent pipeline</h2>
              <p className="mt-3 text-gray-600">We maintain active pipelines across finance, tech, and operations—screened for English, technical depth, and culture fit. Example roles:</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li className="rounded-xl border p-3">Credit Analyst</li>
                <li className="rounded-xl border p-3">Data Engineer</li>
                <li className="rounded-xl border p-3">Full-Stack Dev</li>
                <li className="rounded-xl border p-3">Operations Lead</li>
                <li className="rounded-xl border p-3">People Ops</li>
                <li className="rounded-xl border p-3">Recruiter</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6 bg-gradient-to-b from-white to-gray-50">
              <div className="font-medium">How we vet</div>
              <ol className="mt-3 list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Profile review &amp; skills screen</li>
                <li>English &amp; communication interview</li>
                <li>Technical/case exercise</li>
                <li>Reference &amp; background checks</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Tell us what you need</h2>
            <p className="mt-2 text-gray-600">We’ll reply within one business day with next steps and candidate samples.</p>
            <form className="mt-6 grid grid-cols-1 gap-3">
              <input className="rounded-xl border px-4 py-3" placeholder="Full name" />
              <input className="rounded-xl border px-4 py-3" placeholder="Work email" type="email" />
              <input className="rounded-xl border px-4 py-3" placeholder="Company" />
              <textarea className="rounded-xl border px-4 py-3" placeholder="What roles or pod are you trying to fill?" rows={4} />
              <button type="button" className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium shadow-sm hover:opacity-90 inline-flex items-center gap-2">
                Submit inquiry 
              </button>
              <p className="text-xs text-gray-500">By submitting, you agree to be contacted about FulcrumLATAM services.</p>
            </form>
          </div>
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
            <div className="font-medium">SLA &amp; guarantees</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><CheckCircle2 size={18}/> 3–5 qualified candidates per role within 7–10 business days</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Replacement guarantee during probation</li>
              <li className="flex gap-2"><CheckCircle2 size={18}/> Weekly status updates and pipeline transparency</li>
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Prefer email? <a className="underline" href="mailto:hello@fulcrumlatam.co">hello@fulcrumlatam.co</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} FulcrumLATAM. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
