import React from "react";
import NavIcons from "./NavIcons";
import { FiShare } from "react-icons/fi";
import logo from "../public/icons-1.png";
import Image from "next/image";
import { navItems } from "../shared/Constant";

const SideNav = () => {
  return (
    <div
      className=" bg-[#3c3f7e] text-white w-[350px] 
  rounded-br-lg  justify-center mb-2 pt-4"
    >
      <Image width={280} height={90} src={logo} />
      <div className=" my-8">
        {navItems.map((item) => (
          <NavIcons key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center border-y-2 pl-6 font-extrabold  text-xl gap-3 py-7 cursor-pointer hover:bg-[#fff3e4] hover:text-[#3c3f7e] ">
        <FiShare className="rotate-90 text-4xl" /> Log Out
      </div>
    </div>
  );
};

export default SideNav;
