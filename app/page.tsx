import React from "react";
import { CheckCircle2, Globe, Users, Briefcase, CreditCard, Building2, Rocket, Shield, Clock, ArrowRight } from "lucide-react";

// FulcrumLATAM — modern landing page built from existing materials
// Tech: Next.js/React + Tailwind utility classes
// Notes:
// - Wire copy is embedded below; replace with CMS/MDX later if desired.
// - Gate/private toggle can wrap specific sections based on an env flag.

export default function FulcrumLatamLanding() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-black"/>
            <span className="font-semibold">FulcrumLATAM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-black/70">Home</a>
            <a href="#services" className="hover:text-black/70">Services</a>
            <a href="#why" className="hover:text-black/70">Why Fulcrum</a>
            <a href="#roles" className="hover:text-black/70">Roles We Hire</a>
            <a href="#pricing" className="hover:text-black/70">Pricing</a>
            <a href="#partners" className="hover:text-black/70">Partners</a>
            <a href="#contact" className="hover:text-black/70">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-xl border">Get Started</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Looking for talent? <span className="block">We’ll build your nearshore team.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              We collaborate closely with your team to identify and secure top bilingual talent in Latin America—aligned to your role scope, culture, and time zone. Fully managed recruiting, HR, and payroll so you can focus on growth.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-black text-white inline-flex items-center gap-2">Book an intro <ArrowRight className="h-4 w-4"/></a>
              <a href="#services" className="px-5 py-3 rounded-xl border">See how it works</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {[
                "60–80% workforce cost reduction",
                "Fully managed: Recruitment, Admin, HR",
                "EST/CST/PST coverage",
                "Flexible terms (1‑month notice)",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5"/><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div className="md:pl-10">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border shadow-inner flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 p-6 w-full">
                <Stat label="Candidates/Vetted" value="3" sub="per role (typical)"/>
                <Stat label="Avg. Savings" value="60–80%"/>
                <Stat label="Time Zones" value="EST/CST/PST"/>
                <Stat label="Engagement" value="Monthly" sub="simple invoicing"/>
                <Stat label="Replacement" value="Included" sub="if needed"/>
                <Stat label="Languages" value="Bilingual" sub="EN/ES"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">End‑to‑end support: from sourcing to hiring to administration—so your remote team can focus on mission‑critical work.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <ServiceCard icon={<Users className="h-5 w-5"/>} title="Sourcing" desc="Search, screening, background checks, interviews, and optional role‑specific tests. We introduce the top 3 candidates per role."/>
            <ServiceCard icon={<Briefcase className="h-5 w-5"/>} title="Hiring" desc="Once you select the candidate, we handle contracts and onboarding so you can accelerate ramp‑up."/>
            <ServiceCard icon={<Shield className="h-5 w-5"/>} title="Admin & HR" desc="Payroll, social security, PTO tracking, performance reviews, benefits, equipment, and dedicated account management."/>
          </div>
        </div>
      </section>

      {/* WHY FULCRUM */}
      <section id="why" className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Why Fulcrum</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            <ul className="space-y-4 text-gray-700">
              {[
                "Workforce cost reduction by 60–80% without sacrificing quality",
                "Fully managed services: Recruitment, Admin, and HR",
                "Bilingual talent aligned to your needs and culture",
                "Time‑zone compatibility (EST, CST, PST)",
                "Flexible terms with 1‑month notice",
                "No legal responsibility for the contractor",
                "Improved processes and efficiency",
                "Simplified engagement and payments via US entity",
              ].map((t) => (
                <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 mt-0.5"/><span>{t}</span></li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <StepCard n={1} title="Tell us your needs"/>
              <StepCard n={2} title="Meet top candidates"/>
              <StepCard n={3} title="Hire and onboard"/>
              <StepCard n={4} title="We manage admin"/>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES WE HIRE */}
      <section id="roles" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Roles We Hire</h2>
          <p className="mt-3 text-gray-600 max-w-3xl">Specialized, bilingual professionals across functions and industries.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <RoleGroup title="Financial Services" roles={["Financial Analyst","Accounting Specialist","Bookkeeper","Finance Assistant"]} />
            <RoleGroup title="General Business" roles={["Virtual Assistant","Community Manager","Admin Support","Customer Service"]} />
            <RoleGroup title="Insurance" roles={["Executive Assistant","Intake Specialist","Customer Service Rep"]} />
            <RoleGroup title="Healthcare" roles={["Staffing Coordinator","Billing Specialist","Case Manager","Virtual Receptionist"]} />
            <RoleGroup title="Real Estate" roles={["SDR","Property Manager","Leads Generator","Social Media Manager"]} />
            <RoleGroup title="Software & IT" roles={["IT Support","Frontend/Backend/Full‑stack Dev","QA","Data Engineer/Scientist","UX/UI"]} />
            <RoleGroup title="Law" roles={["Paralegal","Legal Service Coordinator","Intake Specialist","Case Manager"]} />
            <RoleGroup title="Marketing & Sales" roles={["Content Writer","Graphic Designer","SEO Specialist","Marketing Specialist","SDR/BDR","Account Manager"]} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Pricing Snapshot</h2>
          <p className="mt-3 text-gray-600">Transparent monthly ranges include overhead and local fees; exact quote based on role scope and experience.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PriceCard role="Assistant (Jr/Mid)" range="$2,000 – $2,850" fee="$2,500 – $3,500"/>
            <PriceCard role="Investment Banking (Analyst/Associate)" range="$2,000 – $4,500" fee="$3,500 – $5,000"/>
            <PriceCard role="Tech & Data (Jr–Sr)" range="$3,000 – $6,000" fee="$3,500 – $5,000"/>
          </div>
          <p className="mt-4 text-sm text-gray-500">* Ranges include overhead; salary and fees may vary by role and seniority. Final pricing confirmed before engagement.</p>
        </div>
      </section>
      
      function LogoBox({ src, alt }: { src: string; alt: string }) {
        return (
          <div className="h-14 rounded-xl border bg-white flex items-center justify-center p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="max-h-10 max-w-[120px] object-contain" />
          </div>
        );
      }
      {/* Partners */}
      <section id="partners" className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Partners</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <LogoBox name="AllTheRooms" />
            <LogoBox name="Your Logo Here" />
            <LogoBox name="—" />
            <LogoBox name="—" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div className="space-y-3 text-gray-700">
              <p>Email: <a href="mailto:contact@fulcrumlatam.com" className="underline">contact@fulcrumlatam.com</a></p>
              <p>US-based invoicing. EST/CST/PST coverage. Bilingual talent.</p>
              <div className="mt-6">
                <a href="https://cal.com/" className="px-5 py-3 rounded-xl bg-black text-white inline-flex items-center gap-2">Schedule a call <ArrowRight className="h-4 w-4"/></a>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="First Name" required />
                <Input label="Last Name" required />
              </div>
              <Input label="Email" type="email" required />
              <Input label="Company Name" />
              <Textarea label="Message" maxLength={180} />
              <button type="submit" className="px-5 py-3 rounded-xl bg-black text-white">Send</button>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} FulcrumLATAM & Fulcrum US</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} FulcrumLATAM. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-black/70">Privacy</a>
            <a href="#terms" className="hover:text-black/70">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <div className="h-10 w-10 rounded-lg border flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

function StepCard({ n, title }: { n: number; title: string }) {
  return (
    <div className="rounded-2xl border p-5 bg-white">
      <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">{n}</div>
      <div className="mt-3 font-medium">{title}</div>
    </div>
  );
}

function RoleGroup({ title, roles }: { title: string; roles: string[] }) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <div className="font-semibold">{title}</div>
      <ul className="mt-3 space-y-1 text-gray-600 text-sm">
        {roles.map((r) => (
          <li key={r} className="flex gap-2"><span>•</span><span>{r}</span></li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({ role, range, fee }: { role: string; range: string; fee: string }) {
  return (
    <div className="rounded-2xl border p-6 bg-white">
      <div className="font-semibold">{role}</div>
      <div className="mt-2 text-2xl font-semibold">{range}</div>
      <div className="mt-1 text-sm text-gray-600">Recruitment fee: {fee}</div>
    </div>
  );
}

function Input({ label, required, type = "text" }: { label: string; required?: boolean; type?: string }) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}{required && <span className="text-red-500"> *</span>}</span>
      <input type={type} required={required} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
    </label>
  );
}

function Textarea({ label, maxLength }: { label: string; maxLength?: number }) {
  return (
    <label className="block text-sm">
      <span className="text-gray-700">{label}</span>
      <textarea maxLength={maxLength} rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10" />
      {maxLength && <span className="text-xs text-gray-500">0 / {maxLength}</span>}
    </label>
  );
}
