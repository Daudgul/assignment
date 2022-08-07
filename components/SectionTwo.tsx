import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

const SectionTwo = () => {
  return (
    <div className="flex justify-between mx-4 my-6 ">
      <div className="flex gap-4">
        <div className="flex gap-2 items-center bg-white py-1 pl-3 pr-9 mr-3 rounded-md">
          {" "}
          <BsFileEarmarkText className="text-orange-400 text-xl font-bold" />
          <h1 className="text-[#3c3f7e] font-bold text-lg ">
            Application Requirements/Note
          </h1>
        </div>
        <button className="font-bold text-sm flex items-center gap-2 text-white bg-[#3c3f7e] rounded-md py-2 px-4 hover:bg-blue-900">
          <AiOutlinePlusCircle className="text-xl" />
          ADD NOTE
        </button>
      </div>
      <button className="font-bold text-sm text-orange-200 bg-orange-500 rounded-md py-2 px-5 hover:bg-orange-600">
        APPLICATION
      </button>
    </div>
  );
};

export default SectionTwo;
