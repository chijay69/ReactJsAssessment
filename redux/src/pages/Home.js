import { useDispatch, useSelector } from 'react-redux';
import { getCovidData } from '../covidSlice';
import { useEffect } from 'react';

import React from 'react';
import Table from '../components/Table';
import Loading from '../components/Loading';
import Header from '../components/Header';

const Home = () => {
  const dispatch = useDispatch();
  const { covidData, isLoading } = useSelector((state) => state.covid);

  console.log(covidData);
  console.log(isLoading);

  useEffect(() => {
    dispatch(getCovidData());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Header
        totalActiveCases={covidData.data.totalActiveCases}
        totalConfirmedCases={covidData.data.totalConfirmedCases}
        totalSamplesTested={covidData.data.totalSamplesTested}
        death={covidData.data.death}
        discharged={covidData.data.discharged}
      />
      <Table data={covidData.data.states} />
    </div>
  );
};

export default Home;
