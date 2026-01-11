"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { FOOTER_LINKS } from "@/content/footer";

export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollView>
          <Link
            href="/"
            aria-label="go home"
            className="mx-auto block size-fit"
          >
            <Logo />
          </Link>
        </ScrollView>
        <ScrollView stagger delay={0.1}>
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <div key={link.title}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary block duration-150"
                  >
                    <span>{link.title}</span>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </ScrollView>
        <ScrollView delay={0.15} viewMargin="0px 0px -20px 0px">
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="https://github.com/luqmanali05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/luqmanali05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://fiverr.com/luqmanali05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg 
              className="size-6"
              width="1em"
              height="1em"
              fill="currentColor" 
              viewBox="0 0 24 24" 
              role="img" 
              xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Fiverr icon</title><path d="M13.639,11.928h-0.954c0.06-0.258,0.216-0.492,0.534-0.492C13.465,11.436,13.639,11.664,13.639,11.928z M24.001,12 c0,6.627-5.373,12-12,12s-12-5.373-12-12s5.373-12,12-12S24.001,5.373,24.001,12z M6.217,9.78c0,0.298,0.242,0.54,0.54,0.54 c0.298,0,0.54-0.242,0.54-0.54s-0.242-0.54-0.54-0.54C6.459,9.24,6.217,9.482,6.217,9.78z M7.735,13.2h-0.42v-2.526H4.849v-0.162 c0-0.318,0.318-0.324,0.48-0.324c0.186,0,0.27,0.018,0.27,0.018V9.33c0,0-0.168-0.024-0.396-0.024c-0.516,0-1.47,0.144-1.47,1.236 v0.138h-0.45v0.81h0.45v1.71h-0.42v0.81h2.028V13.2H4.849v-1.71h1.35v1.71h-0.42v0.81h1.956V13.2z M11.149,11.484h0.372v-0.81 h-1.77v0.81h0.3l-0.384,1.2c-0.072,0.198-0.09,0.438-0.09,0.438H9.553c0,0-0.018-0.24-0.09-0.438l-0.384-1.2h0.3v-0.81h-1.77v0.81 h0.372l0.924,2.52h1.32L11.149,11.484z M14.797,12.204c0-0.924-0.558-1.608-1.548-1.608c-1.074,0-1.734,0.762-1.734,1.74 c0,0.888,0.642,1.746,1.83,1.746c0.9,0,1.434-0.468,1.434-0.468l-0.408-0.774c0,0-0.444,0.318-0.936,0.318 c-0.354,0-0.69-0.186-0.774-0.612h2.112C14.767,12.54,14.797,12.312,14.797,12.204L14.797,12.204z M17.773,10.632 c0,0-0.066-0.012-0.132-0.012c-0.51-0.006-0.93,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1 c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486 c0-0.606,0.3-1.002,0.918-1.002c0.138,0,0.228,0.018,0.228,0.018V10.632z M20.731,11.73v-1.098c0,0-0.066-0.012-0.132-0.012 c-0.504-0.006-0.924,0.366-1.068,0.822v0h-0.012c0,0,0.012-0.066,0.012-0.168V11.1c0-0.306-0.168-0.426-0.474-0.426h-1.05v0.81 h0.312c0.09,0,0.144,0.054,0.144,0.144V13.2h-0.45v0.81h2.022V13.2h-0.45v-0.486c0-0.606,0.3-1.002,0.918-1.002 C20.641,11.712,20.731,11.73,20.731,11.73z"></path></g>
              </svg>
            </Link>
            <Link
              href="https://upwork.com/freelancers/luqmanali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439"
                />
              </svg>
            </Link>
          </div>
        </ScrollView>
        <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
          <span className="text-muted-foreground block text-center text-sm">
            {" "}
            © {new Date().getFullYear()} Luqman Ali. All rights reserved.
          </span>
        </ScrollView>
      </div>
    </footer>
  );
}
