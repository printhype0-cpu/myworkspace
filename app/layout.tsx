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
  title: "Digital Marketing Agency | SEO, Google Ads, Social Media Marketing",
  description: "Maximize your ROI with expert digital marketing services. We specialize in SEO, Google Ads, Social Media Marketing, Content Creation, and Analytics.",
  keywords: ["digital marketing", "SEO", "Google Ads", "social media marketing", "content creation", "analytics", "PPC"],
  authors: [{ name: "Digital Marketing Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalmarketingagency.com",
    title: "Digital Marketing Agency | SEO & Google Ads Experts",
    description: "Maximize your ROI with expert digital marketing services.",
    siteName: "Digital Marketing Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | SEO & Google Ads Experts",
    description: "Maximize your ROI with expert digital marketing services.",
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
