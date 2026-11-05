import Link from "next/link";

const experiences = [
  {
    number: "01",
    title: "Corporate Events",
    text: "Professional guest reception, registration support, directional assistance and front-of-house coordination for corporate occasions.",
  },
  {
    number: "02",
    title: "Weddings",
    text: "Elegant guest management and ushering designed to keep wedding celebrations welcoming, organized and memorable.",
  },
  {
    number: "03",
    title: "Conferences",
    text: "Reliable event personnel to support guest arrival, seating, registration, information desks and smooth movement throughout the venue.",
  },
  {
    number: "04",
    title: "VIP & Protocol",
    text: "Discreet and polished support for VIP guests, dignitaries, speakers and special attendees.",
  },
  {
    number: "05",
    title: "Launches & Celebrations",
    text: "Professional event staffing that helps create a strong first impression for launches, celebrations and special occasions.",
  },
  {
    number: "06",
    title: "Private Events",
    text: "Personalized ushering and guest assistance for private functions where attention to detail matters.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover USHR Co., our approach to professional ushering, event hospitality and protocol services in Kenya.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      {/* HERO */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            USHR Co. • Experience
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Every event deserves
            <span className="block text-cyan-300">
              a remarkable welcome.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            From intimate celebrations to large-scale corporate occasions,
            USHR Co. brings professionalism, preparation and presence to
            every guest interaction.
          </p>

        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Where We Serve
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Different occasions.
              <span className="block text-white/40">
                One standard of excellence.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="group min-h-[300px] rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-cyan-300">
                    {experience.number}
                  </span>

                  <span className="text-2xl text-white/20 transition group-hover:text-cyan-300">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-bold">
                  {experience.title}
                </h3>

                <p className="mt-5 leading-7 text-white/55">
                  {experience.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* STATEMENT */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 sm:p-12 lg:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Our Approach
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Professional.
            <span className="text-white/40"> Prepared.</span>
            <br />
            Present.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We believe exceptional events are created through preparation,
            communication and attention to detail. Our team arrives ready,
            presents professionally and treats every guest with respect.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center sm:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Your event. Our presence.
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
          Let's create an experience your guests will remember.
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
        >
          Plan Your Event →
        </Link>

      </section>

    </main>
  );
}
