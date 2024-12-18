"use client";

import Link from "next/link";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { PiTote } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black h-[90px] fixed top-0 left-0 right-0 z-50 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          
          <div className="flex items-center justify-between py-3 md:py-5">
            <Link href="/">
              <div className="flex flex-row">
                <p className="text-2xl text-white font-bold">Food</p>
                <p className="text-2xl text-[#FF9F0D] font-bold">tuck</p>
              </div>
            </Link>
            
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoCloseSharp color="white" />
                ) : (
                  <GiHamburgerMenu color="white" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex lg:pt-3">
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/menu"} onClick={() => setNavbar(!navbar)}>
                    Menu
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/blog"} onClick={() => setNavbar(!navbar)}>
                    Blog
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/"} onClick={() => setNavbar(!navbar)}>
                    Pages
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/about"} onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/shop"} onClick={() => setNavbar(!navbar)}>
                    Shop
                  </Link>
                </li>
                <li className="pb-6 text-xl lg:text-white text-[#FF9F0D] py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#FF9F0D]  border-[#FF9F0D]  md:hover:text-[#FF9F0D] md:hover:bg-transparent">
                  <Link href={"/signup"} onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              
              <div className="flex justify-center space-x-6 py-2 lg:text-white text-[#FF9F0D] text-2xl md:hidden border-b-2 md:border-b-0 border-[#FF9F0D]">
                <IoSearchSharp className="cursor-pointer hover:text-[#FF9F0D]" />
                <Link href={"/signup"}>
                <AiOutlineUser className="cursor-pointer hover:text-[#FF9F0D]" /></Link>
                <PiTote className="cursor-pointer hover:text-[#FF9F0D]" />
              </div>
              </ul>
            </div>

            <div className="hidden md:flex space-x-6 lg:text-white text-[#FF9F0D] text-2xl items-center">
              <IoSearchSharp className="cursor-pointer hover:text-[#FF9F0D]" />
              <Link href={"/signup"}>
              <AiOutlineUser className="cursor-pointer hover:text-[#FF9F0D]" /></Link>
              <PiTote className="cursor-pointer hover:text-[#FF9F0D]" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
