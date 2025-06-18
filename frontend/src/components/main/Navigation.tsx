// src/app/components/Navigation.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Taprav" },
  { href: "/zibert", label: "Žibert" },
  { href: "/drive-in", label: "Drive-in" },
  { href: "/rooms", label: "Rooms" },
  { href: "/park", label: "Park" },
  { href: "/spoznaj-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();


  return (
    <div className="w-full bg-white border-b-2 border-gray-100 z-50 lg:sticky lg:top-0">
      <nav className="hidden md:flex justify-center items-center space-x-6 py-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative
                px-1
                py-1
                hover:text-gray-600
                transition-colors duration-200
                ${isActive ? "underline underline-offset-4 decoration-black" : ""}
              `}
            >
              {link.label}
            </Link>
          );
        })}

        
      </nav>

      <div className="md:hidden absolute top-4 right-4">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative w-8 h-8 flex"
          aria-label="Toggle menu"
        >
          <span
            className={`
              fixed h-0.5 w-6 bg-gray-800 rounded transition-all duration-300
              ${isOpen ? "rotate-45 top-5.5" : "top-4"}
            `}
          />
          <span
            className={`
              fixed h-0.5 w-6 bg-gray-800 rounded
              ${isOpen ? "opacity-0" : "top-6"}
            `}
          />
          <span
            className={`
              fixed h-0.5 w-6 bg-gray-800 rounded transition-all duration-300
              ${isOpen ? "-rotate-45 top-5.5" : "top-8"}
            `}
          />
        </button>
      </div>

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? " opacity-100 mt-4 py-2" : "max-h-0 opacity-0"}
          flex flex-col space-y-2 items-center bg-white
        `}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                w-full
                px-4
                py-2
                text-center
                transition-colors duration-200
                ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}
              `}
            >
              {link.label}
            </Link>
          );
        })}

      
      </div>
    </div>
  );
}
