import React from "react";
import * as Icons from "react-bootstrap-icons";

type IconsTypes = {
  title: string;
  icon: string;
};

const NavIcons = ({ title, icon }: IconsTypes) => {
  const { [icon]: Icon } = Icons;
  return (
    <>
      <div className="relative group">
        <div className="w-5 h-5 z-10 bg-[#3c3f7e] group-hover:bg-[#fff3e4] right-0 absolute -top-5 ">
          {" "}
          <div className="w-full h-full z-0 bg-[#3c3f7e] rounded-br-3xl "></div>
        </div>

        {/* /////////////////// MAIN ITEM ///////////////// */}

        <div className="text-white cursor-pointer flex items-center gap-5  pl-5 font-extrabold my-10  text-xl py-3  hover:bg-[#fff3e4] hover:rounded-l-3xl  hover:text-[#3c3f7e] ">
          <Icon style={{ fontSize: "29px" }}></Icon>
          {title}
        </div>

        {/* //////////////////////////////////////////////// */}

        <div className="w-5 h-5 z-10 bg-[#3c3f7e] group-hover:bg-[#fff3e4] right-0 absolute -bottom-5 ">
          {" "}
          <div className="w-full h-full z-0 bg-[#3c3f7e] rounded-tr-3xl "></div>
        </div>
      </div>
    </>
  );
};

export default NavIcons;
