import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXCELLENCE GROSSISTE — Grossiste Parfums de Dubaï en France",
  description:
    "Distributeur officiel Lattafa, Swiss Arabian, Armaf. Prix de gros B2B, minimum 100€.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}