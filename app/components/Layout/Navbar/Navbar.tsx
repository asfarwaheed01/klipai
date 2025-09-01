"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo/logo.svg";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "What is KlipAi", href: "#" },
    { name: "Send KlapAI", href: "#" },
    { name: "AI Agent", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Web3", href: "#" },
  ];

  return (
    <nav className="relative md:mt-[1%] mt-[2%]  md:p-0 px-[10px]">
      <div className="container fixed md:left-1/2 md:-translate-x-1/2 left-1 md:w-[90%] w-[98%] z-50 top-[1%] bg-[#000000] rounded-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:mx-[5%] flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="KlipAI Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-400 text-[16px] px-3 py-2 text-sm font-normal transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <button className="bg-[#12ED39] cursor-pointer hover:bg-green-600 text-black hover:text-white font-semibold px-6 py-2 rounded-full text-sm transition-colors duration-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-400 hover:bg-gray-800 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Mobile Login Button */}
            <div className="pt-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full text-sm transition-colors duration-200">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
