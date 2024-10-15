import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center mt-48">
      <p className="text-2xl font-semibold">
        This page not found!, Click{" "}
        <Link className="text-blue_color border-b border-b-blue_color font-bold" to="/">
          here
        </Link>{" "}
        to go back home page
      </p>
    </div>
  );
};

export default NotFound;
