import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luqman Ali - Full Stack Web Developer | React, Next.js, Node.js & Laravel Expert",
  description: "Professional full stack web developer with 6+ years of experience in building scalable web applications. Specialized in React, Next.js, Node.js, Laravel, WordPress, and Shopify. Available for freelance projects on Fiverr and Upwork.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Laravel Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Freelance Developer",
    "Wordpress Developer",
    "Elementor Developer",
    "Luqman Ali",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "E-commerce Development",
    "Web Application Development",
  ],
  authors: [{ name: "Luqman Ali" }],
  creator: "Luqman Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luqmanali.com",
    title: "Luqman Ali - Full Stack Web Developer",
    description: "Professional full stack web developer with 6+ years of experience in building scalable web applications using React, Next.js, Node.js, and Laravel.",
    siteName: "Luqman Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luqman Ali - Full Stack Web Developer",
    description: "Professional full stack web developer with 6+ years of experience specializing in React, Next.js, Node.js, and Laravel.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
