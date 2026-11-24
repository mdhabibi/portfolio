import type { Metadata } from "next";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeToggle } from "@/components/Client";
import { profile } from "@/data/content";

const SITE = "https://mahdi-habibi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: `${profile.title} — ${profile.role}`, template: `%s · ${profile.title}` },
  description: profile.tagline,
  openGraph: { title: `${profile.title} — ${profile.role}`, description: profile.tagline, images: ["/mahdi.jpg"], type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>
        <nav className="nav">
          <div className="wrap">
            <Link href="/" className="brand">Mahdi Habibi<span>.</span></Link>
            <ul>
              <li className="hide"><Link href="/#work">Work</Link></li>
              <li className="hide"><Link href="/#experience">Experience</Link></li>
              <li className="hide"><Link href="/#publications">Publications</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><ThemeToggle /></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer>
          <div className="wrap">
            <span>© {new Date().getFullYear()} {profile.title}</span>
            <span>{profile.location}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
