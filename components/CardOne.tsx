import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type ItemProps = {
  heading: string;
  subheading: string;
  // chip: string;
};

const CardOne = ({ heading, subheading }: ItemProps) => {
  return (
    <div className="flex items-center h-[95px] bg-white mx-4 shadow-md my-2 hover:shadow-2xl duration-300">
      <div className="bg-[#3c3f7e] w-9 h-[95px] relative">
        <h1 className=" absolute top-9 -left-7  w-[85px] text-white -rotate-90   px-2">
          REQUIRED
        </h1>
      </div>
      <div className=" mx-3 text-orange-400 font-bold flex flex-col justify-center items-center">
        <IoMdCheckmarkCircleOutline className="text-3xl font-extrabold " />
        <h6>Completed</h6>
      </div>
      <div>
        <h1 className="text-xl font-bold text-[#3c3f7e] mb-2">{heading}</h1>
        <h1 className="text-sm text-[#3c3f7e] font-semibold">
          {subheading}
          <span className="ml-12 bg-orange-500 text-white rounded-2xl px-4 py-1">
            See More
          </span>
        </h1>
      </div>
    </div>
  );
};

export default CardOne;
