import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="bg-white w-[312px] h-[330px]  overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
