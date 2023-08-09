"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="min-w-full bg-black backdrop-blur-sm h-24 z-50 border-b-2 border-[#cf9241] overscroll-none ">
      <Link href="/" className="h-full w-fit mx-auto flex">
        <Image
          src="/assets/Goldlogo.png"
          alt="Ashas Logo"
          width={140}
          height={140}
          className="object-contain z-10 "
        />
      </Link>

      {/* Button for Mobile Nav */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden px-3 py-2 text-white absolute top-6 right-4 text-xl"
      >
        {mobileMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile DropDown Nav */}
      <div
        className={`group absolute w-[180px] h-[180px] top-22 right-0 font-inter text-xl md:hidden 
                transition-transform duration-300 ease-out 
                ${
                  mobileMenuOpen
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
      >
        <div className="flex flex-col justify-evenly items-center h-full text-white">
          <Link
            href="/"
            className="w-full h-full flex flex-center bg-[#cf9241] hover:bg-black/70 backdrop-blur-sm ease-in-out duration-300"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="w-full h-full flex flex-center bg-[#cf9241] hover:bg-black/70 backdrop-blur-sm ease-in-out duration-300"
          >
            Menu
          </Link>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="fixed w-full h-24 top-0 right-0 font-inter text-xl md:flex hidden">
        <div className="flex flex-row justify-evenly items-center h-full text-white bg-none w-full ">
          <Link href="/" className=" w-32 h-24 flex flex-center">
            Home
          </Link>
          <Link href="/menu" className=" w-32 h-24 flex flex-center">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
