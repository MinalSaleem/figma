import React from "react";
import Header from "../components/Header";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/chef/1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/chef/2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/chef/3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/chef/4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/chef/5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/chef/6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/chef/7.png" },
  { name: "William Rumi", role: "Chef", image: "/chef/8.png" },
  { name: "Kets William Roy", role: "Chef", image: "/chef/9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/chef/10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/chef/11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/chef/12.png" },
];

const MeetShef = () => {
  return (
    <div>
        <Header title="Our Chef" route="Chef"/>

      <div className="my-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-[90px]">
      
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden  shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetShef;