import React from "react";

import { IoIosSearch } from "react-icons/io";
import { TbArrowsSort } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const recentTransactionData = [
  {
    orderId: "281209",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Today, 08:45 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281208",
    status: "Pending",
    transactionId: "131634495747",
    refundDate: "Yesterday, 3:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281207",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "Yesterday, 3:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281206",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281205",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281204",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281203",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281202",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281201",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },

  {
    orderId: "281200",
    status: "Successful",
    transactionId: "131634495747",
    refundDate: "12 Jul 2023, 03:00 PM",
    orderAmount: "₹1,125.00",
  },
];

const Table = () => {
  return (
    <div className="bg-white">
      {/* Header  */}
      <div className="flex  items-center justify-between m-3">
        <div className="border px-3 py-2 mt-3 mb-3 rounded-md focus:outline-none flex items-center justify-center">
          {/* search bar  */}
          <IoIosSearch style={{ fontSize: "1.3rem" }} />
          <input
            type="text"
            placeholder="Order ID or transaction ID"
            className="mx-2 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="rounded border border-gray-300 px-1 py-1 focus:outline-none flex items-center gap-2">
              Sort
              <TbArrowsSort />
            </button>

            <div className="rounded border border-gray-300 px-1 py-1 focus:outline-none flex items-center gap-2">
              <MdOutlineFileDownload style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1"> */}
      <div className="m-3">
        <div className="border-x border-gray-200 rounded-sm mt-3 overflow-auto">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Transaction ID</th>
                <th>Refund date</th>
                <th>Order amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactionData.map((transaction) => (
                <tr key={transaction.orderId}>
                  <td>
                    <Link to={`/order/${transaction.id}`}>
                      #{transaction.orderId}
                    </Link>
                  </td>
                  <td className="flex gap-2 items-center">
                    <span
                      className={`w-2 h-2 rounded-full flex p-1 mt-2 ${
                        transaction.status === "Successful"
                          ? "bg-green-500"
                          : "bg-[#999999]"
                      }`}
                    ></span>
                    {transaction.status}
                  </td>
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.refundDate}</td>
                  <td>{transaction.orderAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
