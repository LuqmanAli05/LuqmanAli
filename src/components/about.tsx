import { Circle } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Clean Code",
    description:
      "I write maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    title: "User-Centric",
    description:
      "Every project starts with understanding user needs and delivering exceptional experiences.",
  },

  {
    title: "Performance First",
    description:
      "Optimized applications that load fast and scale efficiently under any load.",
  },
  {
    title: "Continuous Learning",
    description:
      "Staying current with the latest technologies and best practices in web development.",
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
              I'm a passionate full stack developer with 6+ years of experience crafting robust web applications. My expertise spans modern frontend frameworks like React and Next.js, backend technologies including Node.js and Laravel, and cloud infrastructure on AWS. I specialize in turning complex business requirements into elegant, scalable solutions.
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
