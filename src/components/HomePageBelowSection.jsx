import React, { useState } from "react";
import cars from "../data/cars.json";
import MySelect from "./MySelect";
import CardsContainer from "./CardsContainer";
import { yearOptions } from "../data/yearsData";
const HomePageBelowSection = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredVehicles, setFilteredVehicles] = useState(cars.vehicles);
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
  const handleFilter = (e) => {
    e.preventDefault();
    const filteredData = cars?.vehicles?.filter((vehicle) => {
      const matchesBrand = selectedBrand
        ? vehicle.make === selectedBrand
        : true;
      const matchesModel = selectedModel
        ? vehicle.model === selectedModel
        : true;
      const matchesYear = selectedYear ? vehicle.year === selectedYear : true;

      return matchesBrand && matchesModel && matchesYear;
    });
    setFilteredVehicles(filteredData)
  };
  return (
    <div className="py-5 px-10 flex flex-col items-center gap-y-5">
      <h4 className="text-3xl text-blue_color font-semibold">Find your car!</h4>
      <div className="flex flex-col gap-y-2 items-center">
        <h1 className="text-blue_color text-lg"> Select Your Preferences</h1>
        <div className="w-full flex items-end justify-center gap-x-3 ">
          <div className="flex flex-col gap-y-1 items-center">
            <h2 className="text-gray-500">Select a Brand</h2>
            <MySelect
              options={brandOptions}
              placeholder="Select a brand"
              onChange={setSelectedBrand}
            />
          </div>
          <div className="flex flex-col gap-y-1 items-center">
            <h2 className="text-gray-500">Select a Model</h2>
            <MySelect
              options={modelrOptions}
              placeholder="Select a model"
              onChange={setSelectedModel}
            />
          </div>
          <div className="flex flex-col gap-y-1 items-center">
            <h2 className="text-gray-500">Select a Year</h2>
            <MySelect
              options={yearOptions}
              placeholder="Select a year"
              onChange={setSelectedYear}
            />
          </div>
        </div>
        <button
          onClick={handleFilter}
          className="bg-blue_color h-fit w-[300px] flex items-center border border-transparent hover:border-blue_color hover:bg-white hover:text-blue_color justify-center mt-1 cursor-pointer text-white duration-200 rounded-xl text-xl font-medium"
        >
          Filter
        </button>
      </div>
      <CardsContainer filteredVehicles={filteredVehicles} />
    </div>
  );
};

export default HomePageBelowSection;
