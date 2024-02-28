import React from "react";

export const CartCard = (props) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "90vh" }}
    >
      <div
        className="flex items-center flex-col gap-5 text-xl text-center border-black border-2 bg-red-400"
        style={{ width: "500px", height: "80vh" }}
      >
        <div>
          <h1 className=" text-4xl font-bold mb-10">Customer's Details</h1>
        </div>
        <label>Customer's name</label>
        <input
          type="text"
          className="border-2 text-center"
          placeholder="Enter Your Name"
        />
        <label>Customer's Contact NO.</label>
        <input
          type="text"
          className="border-2 text-center"
          placeholder="Enter Your Contact No."
        />
        <label>Customer's Email</label>
        <input
          type="email"
          className="border-2 text-center"
          placeholder="Enter Your Email"
        />
        <label>Customer's UPI Id</label>
        <input
          type="text"
          className="border-2 text-center"
          placeholder="Enter Your UPI"
        />

        <button className="bg-yellow-400 px-8 py-2 text-white text-lg font-bold">
          Checkout
        </button>
      </div>
    </div>
  );
};
