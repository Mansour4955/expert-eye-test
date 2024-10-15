import React, { useState } from "react";
import cars from "../data/cars.json";
import image from "../assets/553r-dark-green-muscle-car-1920x914.webp";
const HomePageBelowSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="py-5 px-10 flex flex-col items-center gap-y-5">
      <h4 className="text-3xl text-blue_color font-semibold">Find your car!</h4>
      <div className="w-full grid grid-cols-4 gap-5">
        {cars?.vehicles?.map((vehicle, index) => (
          <div
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ipsum eos illo, sed temporibus, aut necessitatibus
                corrupti magnam praesentium quas possimus quae non debitis sunt
                modi est porro quasi dolores.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageBelowSection;
