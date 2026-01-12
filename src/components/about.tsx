import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "UI/UX Excellence",
    description:
      "User-centered designs that combine aesthetics with functionality for intuitive experiences.",
  },
  {
    title: "Full Stack Development",
    description:
      "End-to-end development from modern frontends (React, Next.js) to robust backends (Node.js, Laravel).",
  },
  {
    title: "CMS & Ecommerce",
    description:
      "Expert in WordPress, Shopify, and WooCommerce for business websites and online stores.",
  },
  {
    title: "Performance & Scale",
    description:
      "Optimized applications with clean code, fast loading times, and cloud infrastructure.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Me
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              I&apos;m a full-stack developer with 6+ years of experience crafting complete web solutions from concept to deployment. My expertise spans UI/UX design, modern frontend frameworks (React, Next.js), backend technologies (Node.js, Laravel), and content management systems including WordPress, Shopify, and WooCommerce. Whether it&apos;s a custom web application, business website, or ecommerce platform, I deliver scalable solutions that drive results.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
