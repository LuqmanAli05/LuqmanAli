"use client";

import { Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { sendContactEmail } from "@/lib/send-email";
import { useState } from "react";

export default function FeaturesSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      // Reset form
      form.reset();
    } else {
      setSubmitStatus({
        type: "error",
        message: result.error || "Failed to send message. Please try again.",
      });
    }

    setIsSubmitting(false);
  }
  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Get in touch
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  We&apos;d love to hear from you! Feel free to reach out to us
                  for any inquiries or to schedule a call.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="https://wa.me/923365102108" className="hover:text-accent-foreground">
                    <MessageCircle className="size-5 mr-2 inline" />
                    <span>Send a message on WhatsApp</span>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@luqmanali.com" className="hover:text-accent-foreground">
                    <Mail className="size-5 mr-2 inline" />
                    <span>contact@luqmanali.com</span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <PhoneCall className="size-5 mr-2 inline" />
                    <span>+1 555-555-5555</span>
                  </Link>
                </li>
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <MapPin className="size-5 mr-2 inline" />
                    <span>123 Main St, Anytown USA</span>
                  </Link>
                </li>
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <MapPin className="size-5 mr-2 inline" />
                    <span>123 Main St, Anytown UK</span>
                  </Link>
                </li> */}
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">
                    Let&apos;s get you to the right place
                  </h3>
                  <p className="mt-4 text-sm">
                    Reach out to our sales team! We’re eager to learn more about
                    how you plan to use our application.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-md ${
                        submitStatus.type === "success"
                          ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                          : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input type="text" id="name" name="name" required disabled={isSubmitting} />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" required disabled={isSubmitting} />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" name="subject" required disabled={isSubmitting} />
                  </div>

                  {/* <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country/Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">DR Congo</SelectItem>
                                    <SelectItem value="2">United States</SelectItem>
                                    <SelectItem value="3">France</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="website">Company Website</Label>
                            <Input type="url" id="website" />
                            <span className="text-muted-foreground inline-block text-sm">Must start with 'https'</span>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="job">Job function</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Finance</SelectItem>
                                    <SelectItem value="2">Education</SelectItem>
                                    <SelectItem value="3">Legal</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  <div>
                    <Label htmlFor="msg">Message</Label>
                    <Textarea id="msg" name="message" rows={3} required disabled={isSubmitting} />
                  </div>

                  <Button type="submit" className="cursor-pointer flex items-center gap-2" disabled={isSubmitting}>
                    <Send className="size-4" />
                    <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                  </Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
