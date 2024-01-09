import React, { useState } from "react";

import { Card, Table } from "../components";

const cardData = [
  {
    id: 1,
    title: "Next Payout",
    amount: "2,312.23",
    orders: "23",
    active: true,
    nextPaymentDate: "Today, 04:00PM",
  },
  {
    id: 2,
    title: "Amount Pending",
    amount: "92,312.20",
    orders: "13",
    active: false,
    nextPaymentDate: "",
  },
  {
    id: 3,
    title: "Amount Processed",
    amount: "23,92,312.19",
    orders: "",
    active: false,
    nextPaymentDate: "",
  },
];

const Payouts = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="">
      {/* Top section  */}
      <div>
        {/* Header section  */}
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="font-bold text-xl">Overview</h1>

          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className="rounded border border-gray-300 px-2 py-1 focus:outline-none"
          >
            <option value="">This Month</option>
            <option value="option1">This Week</option>
            <option value="option2">Today</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3 justify-between items-start mt-6">
          {cardData.map((item) => {
            return (
              <>
                <Card
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  orders={item.orders}
                  active={item.active}
                  nextPaymentDate={item.nextPaymentDate}
                />
              </>
            );
          })}
        </div>
      </div>

      {/* bottom Section  */}
      <div className="mt-6 mb-6">
        {/* title  */}
        <div className="mt-2">
          <h1 className="font-bold text-xl">Transactions | This Month</h1>
          <div className="flex gap-2 mt-4 mb-6">
            <span className="bg-[#E6E6E6] px-2 py-1 rounded-2xl">
              Payouts (22)
            </span>
            <span className="bg-[#146EB4] px-2 py-1 rounded-2xl text-white">
              Refunds (6)
            </span>
          </div>
        </div>

        {/* table  */}
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Payouts;
