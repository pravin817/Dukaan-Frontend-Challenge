import React from "react";
import { useLocation } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";
import { BiMessageDots } from "react-icons/bi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Header = () => {
  const location = useLocation();
  let pathname = location.pathname;
  let pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2);
  console.log(pageTitle);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white px-4 md:px-8 h-[64px] border border-b-2">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <h2 className="font-bold">{pageTitle}</h2>
        <p className="flex gap-2 items-center pl-2 text-xs">
          <RxQuestionMarkCircled style={{ fontSize: "1rem" }} />
          <span>How it works</span>
        </p>
      </div>
      <div className="mt-3 md:mt-0 border bg-[#F2F2F2] px-3 py-2 rounded-md flex items-center md:w-96 focus:outline-none">
        {/* search bar  */}
        <IoIosSearch style={{ fontSize: "1.3rem" }} />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="mx-2 w-full md:w-34 bg-[#F2F2F2] focus:outline-none"
        />
      </div>
      <div className="flex gap-2 items-center mt-3 md:mt-0">
        <BiMessageDots
          style={{ fontSize: "2.5rem" }}
          className=" bg-[#E6E6E6] p-2 rounded-full cursor-pointer"
        />
        <MdOutlineArrowDropDown
          style={{ fontSize: "2.5rem" }}
          className=" bg-[#E6E6E6] rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
