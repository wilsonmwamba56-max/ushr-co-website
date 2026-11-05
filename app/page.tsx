const services = [
  {
    number: "01",
    title: "Professional Ushering",
    text: "Polished, welcoming and highly coordinated guest-facing teams for corporate and private events.",
  },
  {
    number: "02",
    title: "Protocol & Guest Relations",
    text: "Professional protocol support designed for dignitaries, executives, VIPs and distinguished guests.",
  },
  {
    number: "03",
    title: "Event Staffing",
    text: "Reliable event personnel carefully selected and briefed to represent your occasion with excellence.",
  },
  {
    number: "04",
    title: "Corporate Events",
    text: "End-to-end guest experience support for conferences, launches, meetings, galas and corporate functions.",
  },
];

const stats = [
  { value: "01", label: "Professional standard" },
  { value: "24/7", label: "Event readiness" },
  { value: "100%", label: "Guest-focused service" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      
      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-28"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.15),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="absolute right-[-10%] top-[20%] h-[500px] w-[500px] rounded-full border border-cyan-300/10" />
        <div className="absolute right-[-4%] top-[26%] h-[380px] w-[380px] rounded-full border border-cyan-300/10" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                USHERING • PROTOCOL • EVENTS
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Excellence
              <br />
              <span className="text-white/35">at every</span>
              <br />
              entrance.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Protocol Kenya delivers refined ushering, protocol and event staffing
              solutions designed to make every guest feel welcomed, valued and
              professionally attended to.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-black text-[#07111f] transition hover:-translate-y-1 hover:bg-white"
              >
                Plan Your Event
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Explore Services →
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative flex min-h-[500px] items-center justify-center">
            <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-300/5 blur-3xl" />

            <div className="relative h-[420px] w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-cyan-300/10 shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,.08)_46%,transparent_47%)]" />

              <div className="absolute left-8 top-8">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                  PROTOCAL KENYA
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="mb-3 text-5xl font-black tracking-tight">
                  Your event.
                </div>
                <div className="text-2xl font-light text-white/50">
                  Our presence.
                </div>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-5 flex justify-between text-xs uppercase tracking-[0.2em] text-white/40">
                  <span>Professional</span>
                  <span>Prepared</span>
                  <span>Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/10 px-6 py-8 last:border-0 md:border-b-0 md:border-r md:last:border-r-0 lg:px-8"
            >
              <div className="text-3xl font-black text-cyan-300">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Who we are
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              We understand that
              <span className="text-white/35"> first impressions matter.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/60">
              Protocol Kenya is a professional ushering and protocol company built
              around one simple idea: exceptional events require exceptional
              people.
            </p>

            <p className="mt-6 leading-8 text-white/45">
              From the first greeting at the entrance to the final farewell,
              our teams bring confidence, courtesy, coordination and attention
              to detail to every engagement.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center border-b border-cyan-300 pb-2 text-sm font-bold text-cyan-300"
            >
              Work with Protocol Kenya →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-white/10 bg-white/[0.025]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                What we do
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                Services built
                <br />
                <span className="text-white/35">around excellence.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Professional people. Clear coordination. Exceptional guest
              experiences.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group bg-[#07111f] p-8 transition hover:bg-white/[0.06] lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-cyan-300">
                    {service.number}
                  </span>

                  <span className="text-xl text-white/20 transition group-hover:text-cyan-300">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-bold">{service.title}</h3>

                <p className="mt-4 max-w-md leading-7 text-white/45">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-cyan-300/[0.03] p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                The Protocol Kenya experience
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Calm presence.
                <br />
                <span className="text-white/35">Confident execution.</span>
              </h2>

              <p className="mt-7 max-w-2xl leading-8 text-white/50">
                We prepare our teams to understand your event, your guests and
                your expectations before they arrive. That preparation becomes
                visible in every interaction.
              </p>
            </div>

            <div className="text-7xl font-black tracking-[-0.08em] text-white/10 sm:text-9xl">
              Protocol Kenya
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Let's work together
            </div>

            <h2 className="text-5xl font-black tracking-[-0.04em] sm:text-7xl">
              Your next event
              <br />
              <span className="text-white/35">starts here.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl leading-8 text-white/50">
              Tell us about your event and let Protocol Kenya help you create a
              seamless experience from arrival to departure.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@protocol-kenya.com"
                className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-black text-[#07111f] transition hover:bg-white"
              >
                Get in touch
              </a>

              <a
                href="tel:+254700000000"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold transition hover:bg-white/5"
              >
                Call Protocol Kenya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <span className="font-bold text-white/70">Protocol Kenya</span>
            <span className="mx-2">•</span>
            Professional Ushering & Protocol
          </div>

          <div>© {new Date().getFullYear()} Protocol Kenya. All rights reserved.</div>
        </div>
      {/* SERVICES PREVIEW */}
<section className="px-6 sm:px-10 py-24 border-t border-white/10">
  <div className="max-w-7xl mx-auto">

    <div className="max-w-2xl mb-12">
      <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] font-semibold">
        What We Do
      </p>

      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
        Professional service,
        <br />
        <span className="text-white/50">seamlessly delivered.</span>
      </h2>

      <p className="mt-6 text-white/60 text-base leading-7">
        From guest reception to full event protocol, Protocol Kenya provides
        professional teams that help every event run smoothly.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-cyan-300 text-2xl mb-6">01</div>
        <h3 className="text-xl font-semibold">
          Ushers & Guest Services
        </h3>
        <p className="mt-4 text-white/60 leading-7">
          Professional ushers who welcome, guide and assist your guests
          with confidence and courtesy.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-cyan-300 text-2xl mb-6">02</div>
        <h3 className="text-xl font-semibold">
          Protocol & VIP Management
        </h3>
        <p className="mt-4 text-white/60 leading-7">
          Refined protocol support for VIPs, executives, dignitaries
          and special guests.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-cyan-300 text-2xl mb-6">03</div>
        <h3 className="text-xl font-semibold">
          Event Staffing
        </h3>
        <p className="mt-4 text-white/60 leading-7">
          Reliable event teams prepared to support conferences,
          corporate functions, launches and special occasions.
        </p>
      </div>

    </div>

    <div className="mt-10">
      <a
        href="/services"
        className="inline-flex rounded-full border border-white/20 px-7 py-4 text-sm font-semibold hover:bg-white hover:text-[#07111f] transition"
      >
        View All Services →
      </a>
    </div>

  </div>
</section>
</footer>
    </main>
  );
}
