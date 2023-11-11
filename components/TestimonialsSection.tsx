import Image from "next/image";
import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* Testimonials container */}
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        {/* Boxes container */}
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          {/* Quotes image */}
          <Image
            className="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
            alt="quotes image"
            src={"/images/bg-quotes.png"}
            width={55}
            height={45}
          />

          {/* Box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum expedita odit fugit animi deleniti? Veritatis, culpa
              consequatur. Libero incidunt ea nam labore fuga nobis minima quia
              porro officiis architecto.
            </p>

            <div className="flex space-x-4">
              <Image
                className="w-10 h-10 rounded-full"
                src={"/images/profile-1.jpg"}
                width={128}
                height={128}
                alt="profile image"
              />
              <div className="">
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extraLight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>

          {/* Box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum expedita odit fugit animi deleniti? Veritatis, culpa
              consequatur. Libero incidunt ea nam labore fuga nobis minima quia
              porro officiis architecto.
            </p>

            <div className="flex space-x-4">
              <Image
                className="w-10 h-10 rounded-full"
                src={"/images/profile-2.jpg"}
                width={128}
                height={128}
                alt="profile image"
              />
              <div className="">
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extraLight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>

          {/* Box 1 */}
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              harum expedita odit fugit animi deleniti? Veritatis, culpa
              consequatur. Libero incidunt ea nam labore fuga nobis minima quia
              porro officiis architecto.
            </p>

            <div className="flex space-x-4">
              <Image
                className="w-10 h-10 rounded-full"
                src={"/images/profile-3.jpg"}
                width={128}
                height={128}
                alt="profile image"
              />
              <div className="">
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extraLight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
