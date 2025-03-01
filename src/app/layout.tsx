import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Create Next JS App",
    template: "%s | Create Next App",
  },
  description: "Generated by create next app",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li style={{ marginRight: "1rem" }}><Link href="/about">About</Link></li>
            <li style={{ marginRight: "1rem" }}><Link href="/blog">Blog</Link></li>
            <li style={{ marginRight: "1rem" }}><Link href="/register">Register</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "2rem",
          }}
        >
          <p>Developed by Brian Okoth @2024</p>
        </footer>
      </body>
    </html>
  );
}