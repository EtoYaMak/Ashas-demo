"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleMenuOptionClick = () => {
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 350);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);
  return (
    <div className="w-full z-50 overflow-x-clip h-24">
      <nav className="relative bg-black backdrop-blur-sm h-24 z-50 border-b-2 border-[#cf9241] uppercase font-inter">
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
          className="md:hidden px-3 py-2 text-white absolute top-6 right-4 text-xl "
        >
          {mobileMenuOpen ? <BiMenuAltRight size={32} /> : <BiMenu size={32} />}
        </button>

        {/* Mobile DropDown Nav */}
        <div
          ref={dropdownRef}
          className={`absolute w-[180px] h-[180px] top-24 right-0 font-inter text-xl md:hidden 
            transition-transform duration-300 ease-out  backdrop-blur-sm
            ${
              mobileMenuOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
        >
          <div className="flex flex-col justify-evenly items-center h-full text-white rounded-bl-lg ">
            <Link
              href="/"
              onClick={handleMenuOptionClick}
              className="w-full h-full flex flex-center bg-[#cf9241]/90 hover:bg-black/70 backdrop-blur-md  ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={handleMenuOptionClick}
              className="w-full h-full flex flex-center bg-[#cf9241]/90 hover:bg-black/70 backdrop-blur-md ease-in-out duration-300 rounded-bl-lg"
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
    </div>
  );
};

export default Nav;
