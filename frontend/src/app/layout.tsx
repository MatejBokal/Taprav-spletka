// src/app/layout.tsx
"use client";

import "./globals.css";
import Footer from "@/components/main/Footer";
import Header from "@/components/main/Header";
import Navigation from "@/components/main/Navigation";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loginCounter, setLoginCounter] = useState(0);

  return (
    <html lang="sl">
      <body className="bg-white text-gray-800">
          <Header/>
          <Navigation />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
