import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CgSandClock } from "react-icons/cg";

const EmergencyContents = () => {
  return (
    <>
      <div className="flex duration-300  hover:shadow-2xl mx-4 mb-4 h-[183px] shadow-md ">
        <div className="relative h-[183px] bg-[#3c3f7e] w-12">
          <h1 className=" text-white uppercase -rotate-90 px-[44px] py-2 absolute top-[73px] -left-14 -translate-x-1  ">
            required
          </h1>
        </div>

        <div className="   w-full">
          <div className="flex bg-white py-4 ">
            <div className=" px-3 mr-3 text-blue-400 font-bold flex flex-col justify-center items-center">
              <CgSandClock className="text-3xl " />
              <h6>Completed</h6>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#3c3f7e] mb-2">
                2 Emergency Contacts
              </h1>
              <h1 className="text-sm text-[#3c3f7e] font-semibold">
                Please provide the details of two (2) emergency contacts for the
                applicant. These indeviduals cannot be the applicant themselves,
                a reqruitment partner, or other member of a recruitment agency.
              </h1>
            </div>
            <div className=" h-7 my-auto  w-36 bg-orange-500 text-white rounded-2xl text-xs font-bold flex justify-center items-center mx-8 px-2">
              <h6>See More</h6>
            </div>
          </div>
          <div className=" bg-[#fff3e4] flex py-3 px-5 gap-4">
            <h5>19/19 Questions Answered:</h5>{" "}
            <div className="text-xs bg-red-400 text-red-800 font-bold rounded-2xl flex items-center px-3 py-1">
              <BsExclamationCircle className="text-2xl mx-1" />
              <h6>1 Answer Rejected</h6>
            </div>{" "}
            <div className="bg-orange-400 text-xs font-semibold text-white flex items-center rounded-2xl px-3 py-1">
              <IoMdCheckmarkCircleOutline className="text-2xl mx-1" />
              <h6>18 Answers Approved</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyContents;
