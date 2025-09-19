export default function TalentPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-4">Top LATAM Talent, On-Demand</h1>
      <p className="mb-8 text-lg">
        We recruit, vet, and manage high-caliber professionals across finance, data, engineering, and operations—
        aligned to U.S. workflows and time zones.
      </p>

      {/* Roles Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Roles We Place</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Finance & Credit</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Credit Analysts & Underwriters</li>
              <li>Portfolio & Risk Associates</li>
              <li>Ops & Reporting Specialists</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Data & Analytics</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Data Analysts / BI</li>
              <li>Python / SQL Developers</li>
              <li>ETL & QA Engineers</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Engineering & Ops</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Full-stack Engineers</li>
              <li>Automation / RPA</li>
              <li>Ops Coordinators</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vetting / Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vetting Process</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Role definition + scorecard</li>
          <li>Sourcing + initial screens</li>
          <li>Technical + case assessments</li>
          <li>English / communication checks</li>
          <li>Reference + background validations</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Ready to see candidates?</h2>
        <p className="text-gray-700 mb-4">
          Tell us the role, tools, and experience bands you need. We’ll share a short-list in days.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
        >
          Request a short-list
        </a>
      </section>
    </main>
  );
}
