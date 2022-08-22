import React from 'react';
import { Link } from 'react-router-dom';
import Naira from '../images/naira.svg';

const ConfirmPayment = () => {
  return (
    <div className=" mx-auto w-[44rem] py-20">
      <h1 className="font-bold text-4xl text-purple-900 my-10">
        Complete your Purchase
      </h1>

      <div className=" text-2xl font-semibold tracking-wide text-gray-400 pr-10 py-0">
        <ul className="flex justify-between">
          <li>Personal Info</li>
          <li>Billing Info</li>
          <li className=" text-yellow-400 after:content-[''] after:inline-block after:h-3 after:w-full after:border-4 after:bg-yellow-400 after:rounded-lg after:border-yellow-400 after:shadow-xl z-10">
            Confirm Payment
          </li>
        </ul>
        <hr className="  border-slate-800 -translate-y-3 " />
      </div>

      <div className=" bg-white rounded-xl shadow-lg overflow-hidden my-12">
        <div className=" bg-blue-500 flex justify-between py-5 px-20 text-white">
          <p>Item Name</p>
          <p className="flex justify-center items-center gap-3">
            <img src={Naira} alt="" />
            Price
          </p>
        </div>
        <div>
          <div className=" text-blue-900">
            <div className=" flex justify-between my-10 px-20">
              <p>Data science and usability</p>
              <p>50,000.00</p>
            </div>
            <div className=" flex justify-between my-10 px-20">
              <p>Shipping</p>
              <p>0.00</p>
            </div>
            <hr className="mx-5 border-slate-400 " />
            <div className=" flex justify-between py-5 px-10 border rounded-lg border-slate-400 m-10 ">
              <p>Total</p>
              <p>50,000.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" space-x-20">
        <Link to="/purchaseCompleted">
          <button
            className=" bg-yellow-400 text-white rounded-md py-3 px-20 font-bold  shadow-xl
          "
          >
            Pay
          </button>
        </Link>

        <button className=" text-purple-900 font-bold">Cancel Payment</button>
      </div>
    </div>
  );
};

export default ConfirmPayment;
