import React from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

const BillingInfo = () => {
  let mask = 'mM/yY';
  let formatChars = {
    y: '[0-2]',
    Y: '[0-9]',
    m: '[0-1]',
    M: '[1-9]',
  };

  return (
    <div className=" mx-auto w-[44rem] py-20">
      <h1 className="font-bold text-4xl text-purple-900 my-10">
        Complete your Purchase
      </h1>

      <div className=" text-2xl font-semibold tracking-wide text-gray-400 pr-10 py-0">
        <ul className="flex justify-between">
          <li>Personal Info</li>
          <li className=" text-yellow-400 after:content-[''] after:inline-block after:h-3 after:w-full after:border-4 after:bg-yellow-400 after:rounded-lg after:border-yellow-400 after:shadow-xl z-10">
            Billing Info
          </li>
          <li>Confirm Payment</li>
        </ul>
        <hr className="  border-slate-800 -translate-y-3 " />
      </div>

      <form>
        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="name" className="font-semibold">
            Name on Card <span className=" text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Opara Linus Ahmed"
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm "
          />
        </div>

        <div className=" my-10 flex flex-col space-y-3">
          <label htmlFor="card" className="font-semibold">
            Card Type <span className=" text-red-600">*</span>
          </label>
          <select
            name="card"
            id="card"
            className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
          >
            <option value="Lagos">Visa</option>
            <option value="Ibadan">MasterCard</option>
          </select>
        </div>

        <div className="flex my-10 gap-10">
          <div className=" flex flex-col space-y-3 basis-96">
            <label htmlFor="localGovt" className="font-semibold">
              Card details <span className=" text-red-600">*</span>
            </label>
            <InputMask
              mask="99999   99999   99999   99999"
              placeholder="44960 44960 44960 44960 44960"
              className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
              required
            />
          </div>

          <div className=" flex flex-col space-y-3 ">
            <label htmlFor="localGovt" className="font-semibold">
              Expiry date <span className=" text-red-600">*</span>
            </label>
            <InputMask
              className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
              mask={mask}
              formatChars={formatChars}
              required
              placeholder="04 / 23"
            />
          </div>

          <div className=" flex flex-col space-y-3  basis-4 ">
            <label htmlFor="localGovt" className="font-semibold">
              CVV <span className=" text-red-600">*</span>
            </label>
            <InputMask
              mask="999"
              id="cvv"
              placeholder="923"
              className="border border-gray-500 rounded-md p-3 pl-5 text-sm"
              required
            />
          </div>
        </div>
        <div className=" space-x-20">
          <Link to="/confirmPayment">
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

export default BillingInfo;
