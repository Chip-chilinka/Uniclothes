/** @format */

import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui/Index";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[230px] h-[230px]" src={imageUrl} alt={name} />
        </div>
      </Link>
      <Title text={name} size="sm" className="mb-1 mt-3 font-normal"></Title>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-[16px]">
          <b>{price}₽</b>
        </span>
        <Button variant="secondary" size="mini" className="text-sm font-medium">
          <Plus size={15} className="mr-0.5" />
          Добавить
        </Button>
      </div>
    </div>
  );
};
