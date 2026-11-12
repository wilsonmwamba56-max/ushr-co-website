
import Image from "next/image";

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Protocol Kenya, our commitment to professional ushering, VIP protocol and event hospitality.",
};

const values = [
  {
    title: "Professionalism",
    description:
      "A polished, dependable approach to every event.",
  },
  {
    title: "Hospitality",
    description:
      "Making every guest feel welcome and valued.",
  },
  {
    title: "Excellence",
    description:
      "Careful attention to detail from start to finish.",
  },
  {
    title: "Coordination",
    description:
      "Creating smooth and organized guest experiences.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07111f] pt-28 text-white">
      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-5 font-semibold uppercase tracking-[0.25em] text-cyan-300">
          ABOUT PROTOCOL KENYA
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          More than an event.
          <span className="block text-cyan-300">
            An experience.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
          Protocol Kenya specializes in professional
          ushering, protocol and hospitality services.
          We believe every event deserves exceptional
          coordination, warm hospitality and a lasting
          impression.
        </p>
      </section>
      
      {/* ABOUT US PHOTO */}
<section className="mx-auto max-w-7xl px-6 py-12">
  <div className="relative h-[300px] overflow-hidden rounded-3xl border border-cyan-400/30 sm:h-[480px]">
    <Image
      src="/images/about-team.png"
      alt="Protocol Kenya event hospitality"
      fill
      sizes="(max-width: 768px) 100vw, 1200px"
      className="object-cover transition-transform duration-700 hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 to-transparent" />
    <div className="absolute bottom-8 left-8 right-8">
      <h2 className="text-3xl font-bold text-white sm:text-5xl">
        Excellence in Every Experience.
      </h2>
    </div>
  </div>
</section>

      {/* MISSION AND VISION */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2">
        <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">
            OUR MISSION
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Creating exceptional experiences.
          </h2>

          <p className="leading-8 text-white/70">
            To provide professional, reliable and
            welcoming ushering, protocol and hospitality
            services that enhance every event.
          </p>
        </div>

        <div className="rounded-3xl border border-pink-500/20 bg-white/5 p-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-pink-400">
            OUR VISION
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Setting the standard.
          </h2>

          <p className="leading-8 text-white/70">
            To become a trusted name in ushering,
            protocol and event hospitality throughout
            Kenya and beyond.
          </p>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">
          WHAT DEFINES US
        </p>

        <h2 className="mb-10 text-4xl font-black md:text-5xl">
          Our Core Values
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/50 hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-bold text-cyan-300">
                {value.title}
              </h3>

              <p className="leading-7 text-white/60">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT BUTTON */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-black">
          Experience the Protocol Kenya difference.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Let us help make your next event memorable.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-cyan-300 px-8 py-4 font-bold text-[#07111f] transition hover:bg-white"
        >
          Plan Your Event
        </Link>
      </section>
    </main>
  );
}
