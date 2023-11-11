import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function EarlyAccessSection() {
  return (
    <section
      id="early-section"
      className="relative px-6 dark:bg-darkBlue2 md:px-0"
    >
      <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 dark:bg-darkBlue1 md:px-16">
        <h5 className="text-2xl font-bold">Get early access today</h5>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aliquam officiis impedit eligendi fugit. Amet pariatur eius eveniet
          eligendi earum!
        </p>

        <div className="flex flex-col items-strt space-y-6 md:flex-row md:space-y-0 md:space-x-6">
          <div className="w-full md:flex-1">
            <Input
              type="text"
              className="w-full focus:outline-none outline-none bg-white text-darkBlue font-semibold p-5 placeholder:dark:text-gray-800/70 fonsem px-10 rounded-full "
              placeholder="email@example.com"
            />
          </div>

          <Button className="w-full md:w-fit p-3 px-6 rounded-full bg-accentCyan  hover:scale-95 transition text-gray-50">
            Get started for free
          </Button>
        </div>
      </div>
    </section>
  );
}
