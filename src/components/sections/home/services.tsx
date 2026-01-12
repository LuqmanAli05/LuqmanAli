"use client";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { ArrowRight, PlusIcon } from "lucide-react";

const services = [
  {
    title: "WooCommerce Stores",
    description:
      "Custom WooCommerce development with advanced features like multi-vendor support, subscription services, custom payment gateways, and inventory management. Optimized for performance and conversions with mobile-first responsive design.",
    image: "/images/woocommerce-service.png",
  },
  {
    title: "Shopify Development",
    description:
      "Complete Shopify store setup and customization including theme development, app integration, product migration, and custom functionality. From dropshipping to enterprise-level stores with seamless checkout experiences.",
    image: "/images/shopify-service.png",
  },
  {
    title: "WordPress Business Sites",
    description:
      "Professional WordPress websites using Elementor for stunning designs. Custom themes, plugins, SEO optimization, contact forms, booking systems, and membership areas. Fast, secure, and easy to manage.",
    image: "/images/wordpress-service.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Services That Drive Sales
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              From WooCommerce and Shopify stores to custom WordPress websites, I deliver complete ecommerce solutions that convert visitors into customers and help businesses scale.
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.02}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <MorphingDialog
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.25,
                }}
                key={service.title + index}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: "12px",
                  }}
                  className="relative  flex aspect-[10/16] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                >
                  <ScrollViewStaggerWrapper className="h-full w-full">
                    <MorphingDialogImage
                      src={service.image}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className="h-full w-full   absolute  "
                    />
                    <div className="z-10 flex flex-col justify-between h-full w-full py-5 px-4">
                      <div className="self-end">
                        <div className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1  shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                          <div className="bg-background group-hover:bg-muted size-8 overflow-hidden rounded-full duration-500 -rotate-45 ">
                            <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                              <span className="flex size-8">
                                <ArrowRight className="m-auto size-4" />
                              </span>
                              <span className="flex size-8">
                                <ArrowRight className="m-auto size-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center z-20 p-5 rounded-2xl relative bg-secondary">
                        <MorphingDialogTitle className="">
                          {index + 1}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className="">
                          {service.title}
                        </MorphingDialogSubtitle>
                      </div>
                    </div>
                  </ScrollViewStaggerWrapper>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: "24px",
                    }}
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                  >
                    <MorphingDialogImage
                      src={service.image}
                      alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                      className="h-full w-full"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <MorphingDialogTitle className="text-2xl text-zinc-700 dark:text-zinc-400">
                          {index + 1} {" ."}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                          {service.title}
                        </MorphingDialogSubtitle>
                      </div>
                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                          {service.description}
                        </p>

                        <a
                          className="mt-2 inline-flex text-zinc-500 underline"
                          href="https://www.are.na/block/12759029"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Are.na block
                        </a>
                      </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className="text-zinc-50" />
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
