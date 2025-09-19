export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <p className="mb-8 text-lg">
        Transparent pricing so you can scale confidently with FulcrumLATAM talent.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Starter Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-gray-600 mb-4">Great for small teams testing LATAM talent.</p>
          <p className="text-2xl font-bold mb-4">$2,500 / mo</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>1–2 dedicated team members</li>
            <li>Basic support</li>
            <li>Flexible contracts</li>
          </ul>
        </div>

        {/* Growth Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Growth</h2>
          <p className="text-gray-600 mb-4">For teams ready to scale operations quickly.</p>
          <p className="text-2xl font-bold mb-4">$7,500 / mo</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Up to 6 team members</li>
            <li>Advanced vetting</li>
            <li>Ongoing performance reviews</li>
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-gray-600 mb-4">Tailored teams for enterprise needs.</p>
          <p className="text-2xl font-bold mb-4">Custom</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Unlimited scaling</li>
            <li>Dedicated account manager</li>
            <li>Custom onboarding & training</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
