import "./globals.css";
import Nav from "../components/Nav"; // 👈 add this import

export const metadata = {
  title: "FulcrumLATAM — Nearshore teams that move faster and cost less",
  description:
    "FulcrumLATAM recruits, vets, and manages high-caliber talent in LATAM for U.S. firms—finance, data, engineering, operations, and more.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-900 bg-gray-50">
        <Nav />   {/* 👈 nav bar shows up above every page */}
        {children}
      </body>
    </html>
  );
}
