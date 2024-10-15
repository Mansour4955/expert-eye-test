import React from "react";
import CarChart from "./CarChart.js";
import { RiCloseLargeLine } from "react-icons/ri";
const CardPopup = ({ setShowPopup, popupData }) => {
  return (
    <div className="p-4 bg-white absolute left-1/2 -translate-x-1/2 top-5 rounded-xl shadow-[0px_0px_28px_20px_#00000024] cursor-pointer">
      <div className="flex flex-col items-center min-w-[500px] gap-y-2 relative">
        <span
          onClick={() => setShowPopup(false)}
          className="absolute right-0 top-0 cursor-pointer text-white hover:bg-red-600 duration-150 bg-blue_color p-1 rounded-full flex justify-center items-center"
        >
          <RiCloseLargeLine size={16} />
        </span>
        <h1 className="text-xl font-semibold text-gray-500">
          {popupData?.make} {popupData?.year} {popupData?.model}
        </h1>
        <div className="flex gap-x-5">
          <div className="flex flex-col items-center gap-y-2 mr-4">
            <p className="text-xl font-medium text-blue_color">Versions</p>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-blue_color text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Version</th>
                  <th className="py-2 px-4 text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {popupData?.versions.map((version, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-2 px-4">{version.name}</td>
                    <td className="py-2 px-4">
                      ${version.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center gap-y-2 flex-1">
            <p className="text-xl font-medium text-blue_color">Trends</p>
            <CarChart versions={popupData?.versions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
