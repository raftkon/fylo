import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-darkBlue2 pt-12">
      <div className="container mx-auto px-5 pb-10">
        {/* Flex container for all items */}
        <div className="flex flex-col justify-between text-center space-y-24 md:flex-row md:space-y-0">
          {/* Email and phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center justify-center md:justify-start space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  src={"/images/icon-phone.svg"}
                  width={18}
                  height={18}
                  alt="phone icon"
                  className="scale-10"
                />
              </div>
              <div className="text-white ">+1-543-123-4567</div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  src={"/images/icon-email.svg"}
                  width={18}
                  height={18}
                  alt="phone icon"
                  className="scale-10"
                />
              </div>
              <div className="text-white ">example@fylo.com</div>
            </div>
          </div>
          {/* Menus */}
          <div className="flex text-white flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-3">
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                About
              </Link>
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Jobs
              </Link>
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Press
              </Link>
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col space-y-3">
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Contact Us
              </Link>
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Terms
              </Link>
              <Link
                className="hover:border-b mx-auto md:w-fit md:mx-0 w-2/3 border-b border-opacity-0 hover:border-opacity-100 border-gray-400 transition duration-300"
                href={"#"}
              >
                Privacy
              </Link>
            </div>
          </div>
          {/* Social */}

          <div className="flex justify-center pb-10 space-x-3">
            <div className="">
              <Link
                href={"#"}
                className="p-2 text-white bg-darkBlue rounded-full ficon flex"
              >
                <Image
                  src={"/images/facebook.svg"}
                  width={24}
                  height={24}
                  alt="facebook icon"
                />
              </Link>
            </div>
            <div className="">
              <Link
                href={"#"}
                className="p-2 text-white bg-darkBlue rounded-full ficon flex"
              >
                <Image
                  src={"/images/twitter.svg"}
                  width={24}
                  height={24}
                  alt="twitter icon"
                />
              </Link>
            </div>
            <div className="">
              <Link
                href={"#"}
                className="p-2 text-white bg-darkBlue rounded-full ficon flex"
              >
                <Image
                  src={"/images/instagram.svg"}
                  width={24}
                  height={24}
                  alt="instagram icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
