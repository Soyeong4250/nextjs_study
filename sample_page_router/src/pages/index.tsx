import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      {/* <h1>SSG application.</h1> */}
      <p>This is sample page.</p>
      <div><Link href="/other">Go "Other".</Link></div>
    </main>
  );
}
