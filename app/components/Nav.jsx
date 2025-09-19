// app/components/Nav.jsx
"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/fulcrum-logo.png" alt="Fulcrum LATAM" className="h-24 w-auto" />
        </Link>

        {/* Nav links + CTA grouped */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-[18px]">
            <Link href="/services" className="hover:text-black/70">Services</Link>
            <Link href="/why" className="hover:text-black/70">Why Fulcrum</Link>
            <Link href="/pricing" className="hover:text-black/70">Pricing</Link>
            <Link href="/talent" className="hover:text-black/70">Talent</Link>
            <Link href="/contact" className="hover:text-black/70">Contact</Link>
          </nav>

          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-2xl bg-black text-white px-6 py-3 text-base font-medium shadow-sm hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
