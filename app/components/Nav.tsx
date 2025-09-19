// app/components/Nav.tsx
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight text-lg">
          FulcrumLATAM
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/services" className="hover:text-black/70">Services</Link>
          <Link href="/why" className="hover:text-black/70">Why Fulcrum</Link>
          <Link href="/pricing" className="hover:text-black/70">Pricing</Link>
          <Link href="/talent" className="hover:text-black/70">Talent</Link>
          <Link href="/contact" className="hover:text-black/70">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
        >
          Get started <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
}
