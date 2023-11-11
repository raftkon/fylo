import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductiveSection() {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            width={615}
            height={485}
            src={"/images/illustration-stay-productive.png"}
            alt="image"
            className="mb-10"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files Fylo has
              you covered for all of your file storage needs.
            </p>

            <p className="text-md md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              porro, officiis in eius magni soluta. Dolorum quia debitis eius
              labore facilis, asperiores qui laboriosam in odit placeat sequi
              fugiat veritatis?
            </p>
          </div>

          <div className="block mt-4 space-x-2">
            <Link
              href={"#"}
              className="border-b border-accentCyan py-1 text-accentCyan"
            >
              <span className="inline-block pr-1">See how Fylo works</span>
              <Image
                src={"/images/icon-arrow.svg"}
                width={16}
                height={16}
                alt="icon"
                className="inline pb-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
