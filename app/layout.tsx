import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kaushik Rana Portfolio",
  description: "Made by Kaushik Rana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
