import React from "react";

interface HeaderProps {
  title: string; 
  route: string;
}

export default function Header({ title, route }: HeaderProps) {
  return (
    <div>
      <div className="relative w-full h-[410px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/menu/main.png')",
          }}
        >
          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
          <h1 className="text-5xl font-bold mt-[198px]">{title}</h1>
          <div className="flex flex-row space-x-3 mb-12 py-14">
            <p className="text-white">Home / </p>
            <p className="text-yellow-600">{route}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
