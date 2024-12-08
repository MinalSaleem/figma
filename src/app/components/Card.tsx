import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mb-[56px]">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-[871px] h-[520px]  object-cover"
      />
      <div className="p-4">
        <h3 className="text-[#333333] text-2xl font-bold">{title}</h3>
        <p className="text-[#4F4F4F] mt-2">{description}</p>
        <button className="bg-[#FF9F0D] text-white w-[172px] h-[52px] py-[14px] px-[32px] mt-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
}

  