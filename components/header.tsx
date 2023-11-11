import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="container mx-auto mt-10 px-6 text-center md:h-20">
      {/* Dynamic logo */}

      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>

      {/* Menu */}
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        <Link href={"#features"} className="hover:text-accentCyan transition">
          Features
        </Link>
        <Link
          href={"#testimonials"}
          className="hover:text-accentCyan transition"
        >
          Testimonials
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
