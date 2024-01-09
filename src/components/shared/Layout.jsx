import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row bg-[#F5F5F5] h-screen w-screen overflow-hidden">
      {/* sidebar  */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* Header  */}
        <Header />
        <div className="flex-1 mx-8 mt-8 min-h-0 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
