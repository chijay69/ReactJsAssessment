import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <p className=" flex justify-center text-white">Covid Data for States</p>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>State</th>
            <th>Confirmed Cases</th>
            <th>Cases On Admission</th>
            <th>Discharged</th>
            <th>Death</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const {
              state,
              confirmedCases,
              casesOnAdmission,
              discharged,
              death,
            } = item;

            if (index % 2 === 0) {
              return (
                <tr className="active">
                  <th>{index + 1}</th>
                  <td>{state}</td>
                  <td>{confirmedCases}</td>
                  <td>{casesOnAdmission}</td>
                  <td>{discharged}</td>
                  <td>{death}</td>
                </tr>
              );
            }
            return (
              <tr>
                <th>{index + 1}</th>
                <td>{state}</td>
                <td>{confirmedCases}</td>
                <td>{casesOnAdmission}</td>
                <td>{discharged}</td>
                <td>{death}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
