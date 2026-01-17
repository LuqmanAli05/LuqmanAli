import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "./scroll-view";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Trusted by Businesses Worldwide
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              Real results from real clients. See how I&apos;ve helped businesses launch successful websites, custom web applications, and digital solutions that drive growth.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
              <CardHeader>
                <div className="text-2xl font-bold">FashionHub</div>
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    Luqman built our WooCommerce store from scratch and the results exceeded our expectations. Sales increased by 240% in the first 3 months. His attention to detail in optimizing the checkout process and mobile experience made all the difference. The store is fast, beautiful, and easy to manage.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                        alt="Sarah Mitchell"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">
                        Sarah Mitchell
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        CEO, FashionHub
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    Our Shopify store migration was seamless. Luqman handled everything from product import to custom theme development. The new store loads in under 2 seconds and our conversion rate jumped by 65%. Highly recommend!
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                        alt="Michael Chen"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">
                        Michael Chen
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        Founder, TechGear Pro
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Professional WordPress site with Elementor customization. The booking system works perfectly and we&apos;ve seen a 3x increase in online appointments. Clean design and lightning fast!
                  </p>

                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
                        alt="Emma Rodriguez"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">
                        Emma Rodriguez
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        Owner, Bella Spa & Wellness
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="card variant-mixed">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Built our multi-vendor marketplace on WooCommerce with custom vendor dashboards. Revenue hit $50K in the first month. Luqman&apos;s technical expertise is outstanding!
                  </p>

                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"
                        alt="David Thompson"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>DT</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">David Thompson</p>
                      <span className="text-muted-foreground block text-sm">
                        CEO, MarketPlace Hub
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
