import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import MobileMenu from "../components/MobileMenu";


export const metadata: Metadata = {
  title: {
    default:
      "Protocol Kenya | Professional Ushering, Protocol & Hospitality",
    template: "%s | Protocol Kenya",
  },

  description:
    "Protocol Kenya provides professional ushering, protocol, hospitality and event staffing services in Nairobi and across Kenya.",

  keywords: [
    "Protocol Kenya",
    "Ushering services Kenya",
    "Professional ushers Nairobi",
    "Protocol services Kenya",
    "Corporate event staffing",
    "VIP protocol services",
    "Conference ushers",
    "Event hospitality Kenya",
  ],

  openGraph: {
    title: "Protocol Kenya | Professional Protocol & Events",
    description:
      "Professional ushering, protocol and event hospitality services in Kenya.",
    siteName: "Protocol Kenya",
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
  src="/protocol-kenya-3d-logo.png"
  alt="Protocol Kenya 3D Logo"
  width={1940}
  height={780}
  className="h-auto w-[160px] object-contain sm:w-[200px]"
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
