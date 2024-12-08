import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import Header from "../components/Header";
import { PiStudent } from "react-icons/pi";
import { SlCup } from "react-icons/sl";
import { GiHumanTarget } from "react-icons/gi";

export default function Aboutus() {
    const menuItems = [
        {
          name: "Alder Grilled Chinook Salmon",
          description: "Toasted French bread topped with romano, cheddar",
          price: "32$",
          calories: "560 CAL",
        },
      ];
    
  return (
    <div>
        <Header title="About Us"  route="About"/>
      {/* Frist Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex lg:flex-row flex-col px-5 py-24 ">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px radius-6px"
              alt="hero"
              src= "/about/1.png" width={309} height={536} 
            />
          </div>
          {/* Right Images */}
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/about/2.png"
              width={309} height={271}
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/about/3.png"
              width={309} height={382}
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center lg:py-20">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:w-full w-[379px]">
            <h1 className="text-black lg:text-[48px] text-[28px] font-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = "/about/4.png"
            width={1320} height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="text-white body-font">
  <div className="container px-3 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg ">
          
            <PiStudent />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
        <SlCup />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
        <GiHumanTarget />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          What our clients are saying
        </h2>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="lg:w-[800px] w-full bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            {/* Client Image */}
            <div className="flex justify-center">
              <Image
                className="rounded-full"
                src="/about/5.png" // Replace with your actual image path
                alt="Client Image"
                width={96}
                height={96}
              />
            </div>

            {/* Rating */}
            <p className="text-xl font-semibold text-yellow-500 mt-4">99</p>
            <div className="flex justify-center mt-2">
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-gray-300 text-lg">&#9733;</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mt-4 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Aenean lacinia neque vel erat varius.
            </p>

            {/* Client Name and Title */}
            <p className="text-lg font-medium text-gray-800">Alamin Hasan</p>
            <p className="text-sm text-gray-500">Food Specialist</p>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mx-2"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full mx-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-4">Our Food Menu</h1>
      <p className="text-center text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra.
      </p>

      <div className="flex justify-center mb-8">
        {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
          (category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium ${
                index === 0 ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Array(6)
          .fill(menuItems[0])
          .map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b pb-4 last:border-none"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <span className="text-xs text-gray-400">{item.calories}</span>
              </div>
              <div className="text-lg font-semibold text-orange-500">
                {item.price}
              </div>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          View menu
        </button>
      </div>
    </div>


</div>
  );
}


