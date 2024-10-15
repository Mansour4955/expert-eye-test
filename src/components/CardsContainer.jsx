import React, { useState } from "react";
import image from "../assets/553r-dark-green-muscle-car-1920x914.webp";
import CardPopup from "./CardPopup";

const CardsContainer = ({ filteredVehicles }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative w-full grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {showPopup && <CardPopup />}
      {filteredVehicles?.map((vehicle, index) => (
        <div
          onClick={() => setShowPopup(true)}
          className="col-span-1 bg-grey_color flex flex-col rounded-xl duration-200 hover:shadow-[0px_0px_28px_20px_#00000024] cursor-pointer"
          key={index}
        >
          <img
            className="w-full h-40 rounded-t-xl"
            src={image}
            alt="car's img"
          />
          <div className="flex flex-col gap-y-1 mt-1 mb-2 mx-2">
            <div className="flex items-center justify-between">
              <p className="font-bold text-blue_color flex items-center gap-x-1">
                {vehicle.model}{" "}
                <span className="font-medium text-sm text-blue-700">
                  ({vehicle.make})
                </span>
              </p>
              <span className="text-blue_color text-sm font-medium">
                {vehicle?.year}
              </span>
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ipsum eos illo, sed temporibus, aut necessitatibus corrupti magnam
              praesentium quas possimus quae non debitis sunt modi est porro
              quasi dolores.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
