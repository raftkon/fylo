import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
    >
      {/* Hero container */}
      <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
        <Image
          src={"/images/illustration-intro.png"}
          alt="hero image"
          className="mx-auto"
          width={720}
          height={534}
        />
        <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <Button className="p-5 text-black dark:text-white text-base transition rounded-full w-52 bg-accentCyan hover:scale-95">
          Get started
        </Button>
      </div>
    </section>
  );
}
