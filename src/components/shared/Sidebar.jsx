import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../lib/contants/SidebarData";
import { useLocation } from "react-router-dom";

// Images
import Logo from "../../Images/Logo.png";

import { CiWallet } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="hidden md:flex md:flex-col bg-[#1E2640] w-[224px] text-white">
      {/* Topbar  */}
      <div className="flex gap-10 m-3 items-center justify-between">
        {/* UserIcon  */}
        <div className="flex gap-2 items-center">
          <img
            src={Logo}
            alt="Logo of Dukaan"
            width={50}
            height={50}
            className="border border-red-800 rounded-md object-cover object-center block"
          />

          <div>
            <h1 className="font-bold text-[#FFFFFF]">Nishyan</h1>
            <Link to={"/"}>
              <p className="underline text-sm">Visit store</p>
            </Link>
          </div>
        </div>

        {/* Arrow  */}
        <RiArrowDropDownLine
          style={{ fontSize: "2em" }}
          className="cursor-pointer"
        />
      </div>

      <div className="flex-1 mt-3">
        {data.map((item) => {
          return (
            <div key={item.key} className="mx-3">
              <Link to={item.path}>
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#FFFFFF]/10 ${
                    pathname === item.path ? "bg-[#FFFFFF]/10" : ""
                  }`}
                >
                  <div>{item.icon}</div>
                  <div>{item.label}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <>
        <Link to={"/"}>
          <div className="flex items-center gap-2 px-4 py-2 mx-3 mb-3 rounded-md bg-[#FFFFFF]/10">
            {/* Images  */}
            <CiWallet
              style={{ fontSize: "2.5em" }}
              className="bg-[#ffff]/10 p-1 rounded-md"
            />
            {/* text */}
            <div>
              <p className="text-sm text-white/75">Available Credit</p>
              <p className="font-bold">222.10</p>
            </div>
          </div>
        </Link>
      </>
    </div>
  );
};

export default Sidebar;
