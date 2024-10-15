import React, { useState } from "react";
import cars from "../data/cars.json";
import MySelect from "./MySelect";
import CardsContainer from "./CardsContainer";
const HomePageBelowSection = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const brandOptions = Array.from(
    new Set(cars.vehicles.map((vehicle) => vehicle.make))
  ).map((brand) => ({
    value: brand,
    label: brand,
  }));
  const modelrOptions = Array.from(
    new Set(cars.vehicles.map((vehicle) => vehicle.model))
  ).map((model) => ({
    value: model,
    label: model,
  }));
  const yearOptions = [
    { value: 2017, label: 2017 },
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 },
    { value: 2023, label: 2023 },
    { value: 2024, label: 2024 },
  ];
  return (
    <div className="py-5 px-10 flex flex-col items-center gap-y-5">
      <h4 className="text-3xl text-blue_color font-semibold">Find your car!</h4>
      <div className="flex flex-col gap-y-2 items-center">
        <h1>Select Your Preferences</h1>
        <div className="w-full flex items-center justify-center gap-x-3">
          <div className="flex flex-col gap-y-1">
            <h2>Select a Brand</h2>
            <MySelect
              options={brandOptions}
              placeholder="Select a brand"
              onChange={setSelectedBrand}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <h2>Select a Model</h2>
            <MySelect
              options={modelrOptions}
              placeholder="Select a model"
              onChange={setSelectedModel}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <h2>Select a Year</h2>
            <MySelect
              options={yearOptions}
              placeholder="Select a year"
              onChange={setSelectedYear}
            />
          </div>
          <button className="bg-blue_color">Filter</button>
        </div>
      </div>
      <CardsContainer cars={cars} />
    </div>
  );
};

export default HomePageBelowSection;
