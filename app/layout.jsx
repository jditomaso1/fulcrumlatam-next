import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FulcrumLATAM",
  description: "Nearshore teams that move faster and cost less."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
