import React from "react";
import { BsDownload } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineUpload } from "react-icons/ai";

type ItemProps = {
  title: string;
  details: string;
};

const CardTwo = ({ title, details }: ItemProps) => {
  return (
    <div className="flex  hover:shadow-2xl shadow-md duration-300 mx-4 mb-4 ">
      <div className="bg-[#3c3f7e] text-white h-[187px] lg:h-[164px] w-12 relative">
        <h1 className=" uppercase -rotate-90 px-[44px] py-2 absolute top-[61px] -left-14 -translate-x-1 ">
          required
        </h1>
      </div>

      <div className=" w-full">
        <div className="flex bg-white py-4 ">
          <div className=" px-3 mr-3 text-orange-400 font-bold flex flex-col justify-center items-center">
            <IoMdCheckmarkCircleOutline className="text-3xl font-extrabold " />
            <h6>Completed</h6>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#3c3f7e] mb-2">{title}</h1>
            <h1 className="text-sm text-[#3c3f7e] font-semibold">{details}</h1>
          </div>
          <div className="  my-auto h-[38px] w-[38px] bg-[#3c3f7e] text-white rounded-full font-bold flex justify-center items-center mx-8">
            <AiOutlineUpload className="text-2xl" />
          </div>
        </div>
        <div className=" bg-[#fff3e4] flex py-3 px-5 gap-4">
          <h5>Attached Documents:</h5>{" "}
          <div className="bg-orange-400 text-xs font-semibold text-white flex items-center rounded-2xl px-3 py-1">
            <BsDownload className="text-xl mr-2" />
            <h6>Amandeep.pdf</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
