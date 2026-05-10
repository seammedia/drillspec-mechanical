import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Drill Spec Mechanical | Expert Drill Maintenance WA",
  description:
    "Keeping Western Australia's drilling operations running with minimal downtime. 24/7 emergency support, preventive maintenance, and field service across Goldfields, Metro, and Pilbara.",
  keywords:
    "drill maintenance, drilling equipment, Western Australia, emergency breakdown, preventive maintenance, hydraulic services, Goldfields, Pilbara",
  openGraph: {
    title: "Drill Spec Mechanical | Expert Drill Maintenance WA",
    description:
      "Keeping Western Australia's drilling operations running with minimal downtime. 24/7 emergency support, preventive maintenance, and field service.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
