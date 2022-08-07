import Image from "next/image";
import React from "react";
import logo from "../public/Icon-2.png";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";

const Fotter = () => {
  return (
    <>
      <div className="bg-[#3c3f7e] text-white flex justify-around items-center mt-2 ">
        <div className="w-[300px] flex flex-col justify-center items-center mx-8 my-5 ">
          <Image width={250} height={100} src={logo} />
          <p className=" translate-x-2 mb-6">
            We are bookmark education services Pty Ltd, an registered private
            company and one of the leading EdTec organizations working in the
            field of higher education in Australia
          </p>
          <div className="flex gap-4 my-4 text-2xl">
            <BsFacebook />
            <BsGithub />
            <AiFillTwitterCircle />
            <AiFillDribbbleCircle />
          </div>
        </div>
        <div className="flex justify-around flex-1">
          <div>
            <p className="navHeading">Quicklinks</p>
            <ul className="footerLinks">
              <li>Home</li>
              <li>University</li>
              <li>Courses</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="navHeading">Contact Us</p>
            <p>(+55) 254.254.254</p>
            <p>info@Isemajafrica.com</p>
            <p>Helious Tower 75 Tam Trinh Hoang</p>
            <p>Mai - Ha Noi -Viet Nam</p>
          </div>
          <div>
            <p className="navHeading">Terms and Conditions</p>
            <p>Pirvacy Policy</p>
            <p>FAQs</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#fec95d] to-[#f48f0b]  p-4 text-sm font-semibold">
        All Right Reserved | StudyMark.io 2022
      </div>
    </>
  );
};

export default Fotter;
