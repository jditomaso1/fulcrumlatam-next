export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">Get Started with FulcrumLATAM</h1>
      <p className="mb-8 text-lg">
        Ready to scale your team? Here’s how to begin:
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-lg">
        <li>Tell us about your roles and team needs.</li>
        <li>We deliver a short-list of vetted LATAM talent in days.</li>
        <li>Interview, select, and onboard with our support.</li>
      </ol>

      <div className="mt-8">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-6 py-3 text-base font-medium shadow-sm hover:opacity-90"
        >
          Start Now <ArrowRight size={20} />
        </a>
      </div>
    </main>
  );
}
