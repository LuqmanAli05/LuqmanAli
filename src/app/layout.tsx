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
  title: "Luqman Ali - Website Developer & Designer | Custom Web Solutions Expert",
  description: "Professional website developer & designer with 6+ years of experience crafting custom web solutions. Specialized in React, Next.js, WordPress, Shopify, and modern web technologies. From business websites to e-commerce platforms and web applications.",
  keywords: [
    "Website Developer",
    "Web Designer",
    "Custom Web Solutions",
    "React Developer",
    "Next.js Developer",
    "WordPress Developer",
    "Shopify Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Freelance Developer",
    "Elementor Developer",
    "WooCommerce Developer",
    "Business Website Design",
    "E-commerce Development",
    "Web Application Development",
    "Luqman Ali",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Laravel",
    "Custom Website Development",
  ],
  authors: [{ name: "Luqman Ali" }],
  creator: "Luqman Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luqmanali.com",
    title: "Luqman Ali - Website Developer & Designer",
    description: "Professional website developer & designer with 6+ years of experience crafting custom web solutions using React, Next.js, WordPress, and Shopify.",
    siteName: "Luqman Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luqman Ali - Website Developer & Designer",
    description: "Professional website developer & designer specializing in custom web solutions, from business websites to e-commerce platforms.",
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
