import Link from "next/link";
import ContactForm from "../../components/ContactForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Protocol Kenya, your partner for professional ushering, event hospitality and protocol services in Kenya.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">

      {/* HERO */}
      <section className="px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Protocol Kenya • Contact
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            Let's plan your
            <span className="block text-cyan-300">
              next event.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Tell us about your event and what you need. Our team will be
            ready to help you create a professional and welcoming guest
            experience.
          </p>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          {/* CONTACT DETAILS */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Get In Touch
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Your event.
              <span className="block text-white/40">
                Our presence.
              </span>
            </h2>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-sm uppercase tracking-widest text-white/40">
                  Email
                </p>

                <a
                  href="mailto:info@protocolkenya.co.ke"
                  className="mt-2 block text-xl font-semibold transition hover:text-cyan-300"
                >
                  info@protocolkenya.co.ke
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-white/40">
                  Phone
                </p>

                <a
                  href="tel:+254729325439"
                  className="mt-2 block text-xl font-semibold transition hover:text-cyan-300"
                >
                  +254 729 325 439
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-white/40">
                  Location
                </p>

                <p className="mt-2 text-xl font-semibold">
                  Nairobi, Kenya
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-10">

            <h2 className="text-2xl font-bold">
              Tell us about your event
            </h2>

            <ContactForm />
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center sm:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Protocol Kenya
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
          Professional. Prepared. Present.
        </h2>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-cyan-300 hover:text-cyan-300"
        >
          Back to Home
        </Link>

      </section>

    </main>
  );
}
