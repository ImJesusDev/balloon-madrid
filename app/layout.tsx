import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balloon Madrid | Decoración de Eventos",
  description:
    "Expertos en decoración de eventos en Madrid para cumpleaños, baby showers y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        <main className="pt-24">{children}</main>
        <Link
          className="fixed right-4 bottom-3 group bg-white p-2 rounded-full dark:bg-gray-900 border-2 border-gray-900 hover:border-green-400 dark:border-white dark:hover:border-green-400"
          href="https://wa.me/34692206268"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-2xl group-hover:text-green-500 transition group-dark:hover:text-green-400" />
        </Link>
        <Footer />
      </body>
    </html>
  );
}
