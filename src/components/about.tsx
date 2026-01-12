import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Conversion-Focused",
    description:
      "Every design decision is made to maximize conversions and drive real business results.",
  },
  {
    title: "Mobile-First",
    description:
      "Responsive designs that deliver seamless shopping experiences across all devices.",
  },
  {
    title: "Performance Optimized",
    description:
      "Fast-loading stores with optimized images, caching, and CDN integration for better SEO.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Built to grow with your business, from startup to enterprise-level operations.",
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
              I&apos;m a specialized ecommerce and business website developer with 6+ years of experience building high-converting online stores and professional business websites. My expertise includes WordPress, WooCommerce, Shopify, and Elementor, combined with custom development using React, Next.js, and Laravel. I help businesses establish powerful online presence and drive sales through strategic web solutions.
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
