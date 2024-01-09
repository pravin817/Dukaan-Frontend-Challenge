import React from "react";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";
import { RxQuestionMarkCircled } from "react-icons/rx";

const Card = ({ title, amount, orders, active, nextPaymentDate }) => {
  return (
    <div
      className={` w-[370.67px] rounded-md ${
        active ? "bg-[#146EB4] text-white" : "bg-white"
      }`}
    >
      <div className="p-4">
        <p className="flex items-center gap-2 ">
          {title} <RxQuestionMarkCircled style={{ fontSize: "1rem" }} />
        </p>


        <div className="flex items-center justify-between mt-3 mb-1 ">
          <p className="text-3xl font-bold">₹{amount}</p>
          {orders && (
            <Link to={"/orders"}>
              <span
                className={`text-sm underline flex items-center gap-1 ${
                  !active ? "text-blue-800" : "text-white"
                }`}
              >
                {orders} Orders
                <FaAngleRight />
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Extra paramter  */}
      {active ? (
        <div
          className={`flex items-center justify-between bg-[#0E4F82] px-4 py-2 rounded-md`}
        >
          <p className="text-sm">Next Payment Date</p>
          <p className="text-sm bold">{nextPaymentDate}</p>
        </div>
      ):(<div className="hidden"></div>)}
    </div>
  );
};

export default Card;
