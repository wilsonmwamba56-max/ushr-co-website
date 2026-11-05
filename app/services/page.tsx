import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Professional Ushering",
    description:
      "Professional ushers who welcome, guide and assist guests while maintaining a polished and welcoming event environment.",
  },
  {
    number: "02",
    title: "Event Protocol",
    description:
      "Structured protocol support designed to ensure smooth guest movement, dignified arrivals and seamless event coordination.",
  },
  {
    number: "03",
    title: "Corporate Events",
    description:
      "Refined guest management and front-of-house support for conferences, launches, meetings, corporate functions and official occasions.",
  },
  {
    number: "04",
    title: "Weddings & Celebrations",
    description:
      "Elegant ushering and guest coordination that allows couples, families and hosts to focus on celebrating their special occasion.",
  },
  {
    number: "05",
    title: "VIP & Guest Management",
    description:
      "Discreet and professional assistance for VIPs, dignitaries, speakers, special guests and priority attendees.",
  },
  {
    number: "06",
    title: "Event Staffing",
    description:
      "Reliable event personnel selected and prepared according to the scale, style and requirements of your event.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Protocol Kenya, our approach to professional ushering, event hospitality and protocol services in Kenya.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      
      {/* HERO */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            PROTOCOL KENYA • WHAT WE DO
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Service that makes
            <span className="block text-cyan-300">
              every arrival matter.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            From the first guest arrival to the final departure, Protocol Kenya delivers professional 
            ushering, protocol and hospitality services tailored to make every occasion exceptional.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Our Services
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Professional presence.
              <span className="block text-white/45">
                Thoughtful execution.
              </span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-[#0b1829] p-8 transition duration-300 hover:bg-[#102238] sm:p-10"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-sm font-semibold text-cyan-300">
                    {service.number}
                  </span>

                  <span className="text-white/20 transition group-hover:text-cyan-300">
                    ↗
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-white/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-8 sm:p-12 lg:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            The Protocol Kenya Difference
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              More than staffing.
              <span className="block text-white/45">
                We create the experience.
              </span>
            </h2>

            <div>
              <p className="leading-8 text-white/65">
                Every interaction contributes to how guests remember an
                event. Our team combines professionalism, presentation,
                communication and attention to detail to create an experience
                that feels organized from the moment guests arrive.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#07111f] transition hover:bg-white"
              >
                Plan Your Event →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Ready when you are
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
          Let's make your next event feel effortless.
        </h2>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#07111f] transition hover:bg-cyan-300"
        >
          Get in Touch
        </Link>
      </section>

    </main>
  );
}
