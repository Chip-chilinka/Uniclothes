/** @format */

import React from "react";
import { CheckboxfilterGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui/input";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Позже разберусь" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-6">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" min={100} max={30000} placeholder="30000" />
        </div>

        <RangeSlider min={0} max={30000} step={10} value={[0, 30000]} />
      </div>

      <CheckboxfilterGroup
        title="Состав"
        className="mt-5"
        limit={5}
        defaultItems={[
          {
            text: "Хлопок",
            value: "1",
          },
          {
            text: "Полиэстер",
            value: "2",
          },
          {
            text: "Шерсть",
            value: "3",
          },
          {
            text: "Джинса",
            value: "4",
          },
          {
            text: "Брезент",
            value: "5",
          },
          {
            text: "Хлопок",
            value: "6",
          },
          {
            text: "Полиэстер",
            value: "7",
          },
          {
            text: "Шерсть",
            value: "8",
          },
          {
            text: "Джинса",
            value: "9",
          },
          {
            text: "Брезент",
            value: "10",
          },
        ]}
        items={[
          {
            text: "Хлопок",
            value: "1",
          },
          {
            text: "Полиэстер",
            value: "2",
          },
          {
            text: "Шерсть",
            value: "3",
          },
          {
            text: "Джинса",
            value: "4",
          },
          {
            text: "Брезент",
            value: "5",
          },
          {
            text: "Хлопок",
            value: "6",
          },
          {
            text: "Полиэстер",
            value: "7",
          },
          {
            text: "Шерсть",
            value: "8",
          },
          {
            text: "Джинса",
            value: "9",
          },
          {
            text: "Брезент",
            value: "10",
          },
        ]}
      />
    </div>
  );
};
