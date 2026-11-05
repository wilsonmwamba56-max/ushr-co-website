import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import MobileMenu from "../components/MobileMenu";


export const metadata: Metadata = {
  title: {
    default:
      "USHR Co. | Professional Ushering & Protocol Services in Kenya",
    template: "%s | USHR Co.",
  },

  description:
    "USHR Co. provides professional ushering, VIP protocol, guest reception, corporate event staffing and hospitality services in Nairobi and across Kenya.",

  applicationName: "USHR Co.",

  keywords: [
    "USHR Co.",
    "Ushering services Kenya",
    "Professional ushers Nairobi",
    "Protocol services Kenya",
    "Corporate event staffing",
    "VIP protocol services",
    "Conference ushers",
    "Event hospitality Kenya",
  ],

  openGraph: {
    title: "USHR Co. | Professional Ushering & Protocol",
    description:
      "Excellence at every entrance. Professional ushering, protocol and event staffing services in Kenya.",
    siteName: "USHR Co.",
    locale: "en_KE",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#07111f] text-white antialiased">

        {/* NAVIGATION */}
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-20">


          {/* LOGO */}

<Link href="/" className="flex shrink-0 items-center">
  <Image
    src="/ushr-logo.png"
    alt="USHR Co. Official Logo"
    width={210}
    height={70}
    className="h-auto max-h-[65px] w-[160px] object-contain md:w-[190px]"
    priority
  />
</Link>



            {/* NAV LINKS */}
            <nav className="hidden items-center gap-7 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/70 transition hover:text-cyan-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flexrounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#07111f] transition hover:bg-cyan-300"
            >
              Plan Your Event
            </Link>

{/* MOBILE NAVIGATION */}
  <MobileMenu />

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}
