import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Kaushikkumar Rana Portfolio | Associate Professor ",
  description: "Made by Kaushik Rana | Assistant Professor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
