import React from 'react';
import { Link } from 'react-router-dom';
import CheckMark from '../images/checkmark.svg';

const PurchaseCompleted = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div
        className=" bg-white  py-10 px-24 shadow-lg rounded-lg w-[35rem]
      "
      >
        <div className=" bg-white rounded-full p-5 shadow-lg w-20 h-20 flex justify-center items-center mx-auto mb-1">
          {' '}
          <img src={CheckMark} alt="check" />
        </div>
        <div>
          <h1 className="font-bold text-4xl text-purple-900 mb-10">
            Purchase Completed
          </h1>
          <p className="my-10 tracking-wide">
            Please check your email for details concerning this transaction
          </p>
          <Link
            to="/"
            className=" text-yellow-400 border-b-2 py-1 border-yellow-400 "
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCompleted;
