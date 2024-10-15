import React from "react";
import { links } from "../data/headerLinks";
import { Link, NavLink } from "react-router-dom";
import profileImage from "../assets/unnamed.jpg";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-5 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <Link to="/" className="text-3xl font-semibold text-blue_color">
        ExpertEye
      </Link>
      <div className="flex items-center gap-x-5">
        {links?.map((link, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-xl border-b-[2px] text-blue_color border-b-blue_color"
                : "text-xl border-b-[2px] border-b-transparent"
            }
            key={index}
            to={link?.url}
          >
            {link?.title}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-x-1 px-2 py-1 bg-grey_color rounded-lg hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] cursor-pointer duration-200">
        <img
          className="h-7 w-7 rounded-full"
          src={profileImage}
          alt="profileImage"
        />
        <span className="font-normal">Amine Mansour</span>
      </div>
    </div>
  );
};

export default Header;
