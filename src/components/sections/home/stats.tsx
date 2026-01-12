"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Proven Track Record in Ecommerce
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              With over 6 years in the industry, I&apos;ve helped businesses launch and scale successful online stores, driving millions in revenue through optimized ecommerce solutions and conversion-focused designs.
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">6+</div>
              <p>Years Building Ecommerce</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">150+</div>
              <p>Online Stores Launched</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">$5M+</div>
              <p>Revenue Generated</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
