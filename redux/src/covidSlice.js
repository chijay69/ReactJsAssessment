import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  covidData: ['one'],
  isLoading: true,
};

const url = 'https://covidnigeria.herokuapp.com/api';

export const getCovidData = createAsyncThunk('covid/getCovidData', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    clearData: (state) => {
      state.covidData = [];
    },
  },
  extraReducers: {
    [getCovidData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCovidData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.covidData = action.payload;
    },
    [getCovidData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearData, addWord } = covidSlice.actions;
export default covidSlice.reducer;
