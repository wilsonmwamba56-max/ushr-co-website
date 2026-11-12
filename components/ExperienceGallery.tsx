
import Image from "next/image";

const experiences = [
  {
    title: "Corporate Conferences",
    category: "Corporate Events",
    image: "/images/service-corporate.jpg",
    description:
      "Professional guest coordination for conferences, seminars and business gatherings.",
  },
  {
    title: "Weddings & Celebrations",
    category: "Special Occasions",
    image: "/images/service-weddings.jpg",
    description:
      "Elegant hospitality and seamless guest reception for memorable celebrations.",
  },
  {
    title: "VIP Protocol",
    category: "Executive Events",
    image: "/images/service-vip.jpg",
    description:
      "Discreet and coordinated guest experiences for distinguished attendees.",
  },
  {
    title: "Guest Hospitality",
    category: "Hospitality",
    image: "/images/service-hospitality.jpg",
    description:
      "Warm welcomes and professional assistance throughout every occasion.",
  },
  {
    title: "Event Ushering",
    category: "Guest Experience",
    image: "/images/service-ushering.jpg",
    description:
      "Welcoming, guiding and supporting event guests with professionalism.",
  },
  {
    title: "Event Staffing",
    category: "Event Operations",
    image: "/images/service-staffing.jpg",
    description:
      "Coordinated teams delivering dependable event support.",
  },
];

export default function ExperienceGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-12 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-300">
          PROTOCOL KENYA • EXPERIENCE
        </p>

        <h2 className="text-4xl font-black text-white md:text-5xl">
          Every Event.
          <span className="block text-cyan-300">
            An Exceptional Experience.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/60">
          Explore the occasions and guest experiences
          that inspire our professional ushering,
          protocol and hospitality services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {experiences.map((event) => (
          <article
            key={event.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:border-cyan-400/50"
          >

            <div className="relative h-64 overflow-hidden">
              <Image
                src={event.image}
                alt={`${event.title} illustration`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/70 to-transparent" />

              <span className="absolute bottom-5 left-5 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-[#07111f]">
                {event.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-white">
                {event.title}
              </h3>

              <p className="leading-7 text-white/60">
                {event.description}
              </p>
            </div>

          </article>
        ))}

      </div>

      <p className="mt-8 text-center text-xs text-white/40">
        Images are illustrative representations of our service areas.
      </p>

    </section>
  );
}
