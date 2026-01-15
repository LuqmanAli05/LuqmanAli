"use client";

import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT } from "@/content/portfolio";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleProjects = PORTFOLIO_CONTENT.slice(0, visibleCount);
  const hasMore = visibleCount < PORTFOLIO_CONTENT.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <section
      className="py-16 md:py-32 bg-gray-50 dark:bg-transparent"
      id="portfolio"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Featured Projects
          </h2>
          <p className="max-w-sm sm:ml-auto">
            A selection of recent projects showcasing my expertise in building modern, scalable web applications across various industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {visibleProjects.map((item, index) => (
            <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="mt-20">
            <button
              onClick={loadMore}
              className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
            >
              <span className="text-foreground text-base">Load More</span>
              <span className="dark:border-background block h-8 w-1 border-l bg-white dark:bg-zinc-700"></span>

              <div className="bg-background group-hover:bg-muted size-8 overflow-hidden rounded-full duration-500 -rotate-45 ">
                <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-8">
                    <ArrowDown className="m-auto size-4" />
                  </span>
                  <span className="flex size-8">
                    <ArrowDown className="m-auto size-4" />
                  </span>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
