"use client";

import { UseInViewOptions, motion } from "motion/react";
import { InView } from "./motion-primitives/in-view";
import { useState, useEffect } from "react";

export function ScrollView({
  children,
  stagger = false,
  delay = 0,
  viewMargin = "0px 0px -200px 0px",
}: {
  children: React.ReactNode;
  stagger?: boolean;
  delay?: number;
  viewMargin?: UseInViewOptions["margin"];
}) {
  const [blurAmount, setBlurAmount] = useState(12);

  useEffect(() => {
    // Reduce blur on mobile for better performance
    const isMobile = window.innerWidth < 768;
    setBlurAmount(isMobile ? 4 : 12);
  }, []);

  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 20, filter: `blur(${blurAmount}px)` },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            delay: delay,
            staggerChildren: stagger ? 0.09 : 0,
            duration: 0.5,
          },
        },
      }}
      viewOptions={{ margin: viewMargin }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </InView>
  );
}

export function ScrollViewStaggerWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
