"use client";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 border-b bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="font-bold">FulcrumLATAM</div>
          <a href="#contact" className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Get started <ArrowRight size={16} />
          </a>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold">Nearshore teams that move faster and cost less.</h1>
        <p className="mt-4 text-lg text-gray-600">
          FulcrumLATAM recruits, vets, and manages high‑caliber talent in LATAM for U.S. firms—finance, data, engineering, operations, and more.
        </p>
      </main>
    </div>
  );
}
