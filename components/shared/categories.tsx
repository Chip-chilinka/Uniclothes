/** @format */
"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Новинки" },
  { id: 2, name: "Футболки" },
  { id: 3, name: "Штаны" },
  { id: 4, name: "Куртки" },
  { id: 5, name: "Кофты" },
  { id: 6, name: "Аксессуары" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          href={`/#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
