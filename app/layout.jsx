export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "default-no-store";

import "./globals.css";

export const metadata = {
  title: "FulcrumLATAM — Nearshore teams that move faster and cost less",
  description:
    "FulcrumLATAM recruits, vets, and manages high-caliber talent in LATAM for U.S. firms—finance, data, engineering, operations, and more.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
