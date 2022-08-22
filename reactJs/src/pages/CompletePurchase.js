import React from 'react';
import { Link } from 'react-router-dom';

const CompletePurchase = () => {
  return (
    <div className=" mx-auto w-[44rem] py-20">
      <h1 className="font-bold text-4xl text-purple-900 my-10">
        Complete your Purchase
      </h1>

      <div className=" text-2xl font-semibold tracking-wide text-gray-400 pr-10 py-0">
        <ul className="flex justify-between">
          <li className=" text-yellow-400 after:content-[''] after:inline-block after:h-3 after:w-full after:border-4 after:bg-yellow-400 after:rounded-lg after:border-yellow-400 after:shadow-xl z-10">
            Personal Info
          </li>
          <li>Billing Info</li>
          <li>Confirm Payment</li>
        </ul>
        <hr className="  border-slate-800 -translate-y-3 " />
      </div>

      <form>
        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            placeholder="Opara Linus Ahmed"
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm "
          />
        </div>
        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="email" className="font-semibold">
            Email Address <span className=" text-red-600">*</span>
          </label>
          <p className=" text-xs text-slate-500">
            The purchase reciept would be sent to this address
          </p>
          <input
            type="text"
            placeholder="OparaLinusAhmed@devmail.com"
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
          />
        </div>
        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="address" className="font-semibold">
            Address 1
          </label>
          <input
            type="text"
            placeholder="The address of the user goes here"
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
          />
        </div>
        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="address" className="font-semibold">
            Address 2
          </label>
          <input
            type="text"
            placeholder="and here."
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
          />
        </div>
        <div className="flex my-10 gap-10">
          <div className=" flex flex-col space-y-3 basis-2/3">
            <label htmlFor="localGovt" className="font-semibold">
              Local Government
            </label>
            <input
              type="text"
              placeholder="Surulere"
              className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
            />
          </div>
          <div className=" flex flex-col space-y-3 basis-1/3">
            <label htmlFor="state" className="font-semibold">
              State
            </label>
            <select
              name="state"
              id="state"
              className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
            >
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
            </select>
          </div>
        </div>
        <div className=" space-x-20">
          <Link to="/billingInfo">
            <button
              className=" bg-yellow-400 text-white rounded-md py-3 px-20 font-bold  shadow-xl
          "
            >
              Next
            </button>
          </Link>

          <button className=" text-purple-900 font-bold">Cancel Payment</button>
        </div>
      </form>
    </div>
  );
};

export default CompletePurchase;
