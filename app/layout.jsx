import "./globals.css";

export const metadata = {
  title: "FulcrumLATAM",
  description: "Baseline sanity check",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
