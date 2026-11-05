
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="ushr-mobile-menu"
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white"
      >
        <span className="text-2xl leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open && (
        <nav
          id="ushr-mobile-menu"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-50 border-t border-white/10 bg-[#07111f] px-6 py-6 shadow-2xl"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/85 transition hover:text-cyan-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cyan-200 px-5 py-3 text-center font-semibold text-[#07111f]"
            >
              Plan Your Event
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
