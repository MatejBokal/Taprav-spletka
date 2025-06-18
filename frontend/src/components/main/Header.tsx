// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  
  const pathName = usePathname();

  function getLogo() {
    if (pathName.startsWith("/park/dogodki")) return "/slike/logo/logo-dogodki.png";
    if (pathName.startsWith("/zibert")) return "/slike/logo/logo-zibert.png";
    if (pathName.startsWith("/drive-in")) return "/slike/logo/logo-drive-in.png";
    if (pathName.startsWith("/rooms")) return "/slike/logo/logo-rooms.png";
    if (pathName.startsWith("/park")) return "/slike/logo/logo-park.png";
    if (pathName.startsWith("/b2b")) return "/slike/logo/logo-b2b.png";
    return "/slike/logo/logo-taprav.png";
  }


  return (
    <header className="bg-white relative">
      <div className="px-4 flex justify-center">
        <Link href="/">
          <Image
            src={getLogo()}
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

    </header>
  );
}
