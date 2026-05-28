import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Showroom",
  description: "3D Showroom using React Three Fiber and Next.js",
  openGraph: {
    title: "3D Showroom",
    description: "3D Showroom using React Three Fiber and Next.js",
    // url: "https://114-2-web-112405033-hw3.vercel.app/showroom",
    // siteName: "3D Showroom",
    images: "/img.png",
    locale: "en_US",
    type: "website",
  },
  icons: "/icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
