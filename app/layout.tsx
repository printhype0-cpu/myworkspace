import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Amod Kumar | SEO, Google Ads & Social Media Marketing Expert",
  description: "Grow your business with Amod Kumar, a digital marketing expert. Get 300% ROI with proven SEO, PPC, and Social Media strategies.",
  keywords: ["Amod Kumar", "digital marketing", "SEO expert", "Google Ads", "social media marketing", "PPC", "ROI driven marketing"],
  authors: [{ name: "Amod Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amodkumar.com",
    title: "Amod Kumar | Digital Marketing Expert",
    description: "Maximize your ROI with expert digital marketing services from Amod Kumar.",
    siteName: "Amod Kumar Digital Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amod Kumar | Digital Marketing Expert",
    description: "Maximize your ROI with expert digital marketing services from Amod Kumar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
