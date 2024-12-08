import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <div className="bg-black text-white  space-x-0  lg:space-x-5">
        <div className="flex flex-col lg:flex-row justify-between px-[140px] py-[120px]">
          <div className="text-white md:w-[50%] w-[100%]">
            <h2 className="text-[20px] md:text-[32px] font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
            </h2>
            <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
              Don&#39;t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          <div className="flex flex-row md:mt-0 mt-[20px] w-[200px] lg:w-[459px] h-[55px] ">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] w-3/5 lg:w-[296px] rounded-md"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px] w-2/5 rounded-md">
              Subscribe Now
            </button>
          </div>
        </div>

        <hr className="my-4 border-[#FF9F0D] mx-[135px]" />
        <div className="lg:h-[440px] flex flex-col lg:flex-row justify-between lg:justify-evenly py-8 lg:py-[80px] px-5 lg:px-0">
          <div className="mb-10 lg:mb-0">
            <div>
              <h3 className="lg:text-2xl text-lg font-bold pb-5">About Us.</h3>
            </div>
            <div className="w-80">
              <p>
                orporate clients and leisure travelers has been relying on
                Groundlink for dependab safe, and professional chauffeured car
                service in major cities across World.
              </p>
            </div>
            <div className="flex flex-row mt-[34px]">
              <div>
                <Image
                  src="/footer/watch.png"
                  alt="watch"
                  width={76}
                  height={76}
                  className="flex items-center justify-center  w-[80px] h-[80px]"
                />
              </div>
              <div className="flex flex-col font-normal ml-4">
                <h3 className=" text-lg">Opening Houres</h3>
                <p className="">Mon - Sat(8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div className="mb-8 lg:mb-0  w-full lg:w-auto">
            <h3 className="lg:text-2xl text-lg font-bold pb-5">Useful Links</h3>
            <ul className="flex flex-col lg:gap-5 gap-1">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          <div className="mb-8 lg:mb-0  w-full lg:w-auto">
            <h3 className="lg:text-2xl text-lg font-bold pb-5">Help?</h3>
            <ul className="flex flex-col lg:gap-5 gap-1">
              <li><Link href={"/faq"}>FAQ</Link></li>
              <li>Terms & conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="mb-10 lg:mb-0">
            <h3 className="lg:text-2xl text-lg font-bold pb-5">Recent Post</h3>
            <div className="flex flex-col">
              <div className="flex flex-row space-y-3 lg:space-y-0">
                <div>
                  <Image
                    src="/footer/1.png"
                    alt="gamepad"
                    width={76}
                    height={76}
                    className="flex items-center justify-center  w-[55px] h-[47px]"
                  />
                </div>

                <div className="flex flex-col justify-between lg:ml-4 ml-3">
                  <p className="text-gray-400 text-base">20 Feb 2022</p>
                  <p className="text-lg">Keep Your Business</p>
                </div>
              </div>

              <div className="flex flex-row space-y-3 lg:space-y-0 my-4">
                <div>
                  <Image
                    src="/footer/2.png"
                    alt="gamepad"
                    width={76}
                    height={76}
                    className="flex items-center justify-center  w-[55px] h-[47px]"
                  />
                </div>

                <div className="flex flex-col justify-between lg:ml-4 ml-3">
                  <p className="text-gray-400 text-base">20 Feb 2022</p>
                  <p className="text-lg">Keep Your Business</p>
                </div>
              </div>

              <div className="flex flex-row space-y-3 lg:space-y-0">
                <div>
                  <Image
                    src="/footer/3.png"
                    alt="gamepad"
                    width={76}
                    height={76}
                    className="flex items-center justify-center  w-[55px] h-[47px]"
                  />
                </div>

                <div className="flex flex-col justify-between lg:ml-4 ml-3">
                  <p className="text-gray-400 text-base">20 Feb 2022</p>
                  <p className="text-lg">Keep Your Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:items-center lg:justify-center justify-start text-white bg-[#4F4F4F] h-auto lg:h-[99px] ">
        <FaRegCopyright />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}
