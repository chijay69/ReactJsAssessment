import React from 'react';

const Header = ({
  totalActiveCases,
  totalConfirmedCases,
  totalSamplesTested,
  death,
  discharged,
}) => {
  return (
    <div>
      <h1 className=" my-10 text-white mx-auto w-full text-4xl flex justify-center">
        COVID DATA FOR NIGERIA
      </h1>
      <p className=" text-white mx-auto w-full text-2xl my-10">
        Total Active Cases : {totalActiveCases}
      </p>
      <p className=" text-white mx-auto w-full text-2xl my-10">
        Total Confirmed Cases : {totalConfirmedCases}
      </p>
      <p className=" text-white mx-auto w-full text-2xl my-10">
        Total Sampled Cases : {totalSamplesTested}
      </p>
      <p className=" text-white mx-auto w-full text-2xl my-10">
        Death : {death}
      </p>
      <p className=" text-white mx-auto w-full text-2xl my-10">
        Discharged : {discharged}
      </p>
    </div>
  );
};

export default Header;
