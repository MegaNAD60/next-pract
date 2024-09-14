import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <h1>This will be for nav and other reuseable layouts and templates</h1>
        <Link href='/home-page'>Home</Link>
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
