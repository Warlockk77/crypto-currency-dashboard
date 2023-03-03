import { createSlice } from "@reduxjs/toolkit";

const initialCurrency = {
  buy: "",
  sell: "",
};

export const dropDownExchangeSlice = createSlice({
  name: "exchangeCurrency",
  initialState: initialCurrency,
  reducers: {
    setBuy: (state, action) => {
      state.buy = action.payload;
    },
    setSell: (state, action) => {
      state.sell = action.payload;
    },
  },
});

export const { setBuy, setSell } = dropDownExchangeSlice.actions;
export default dropDownExchangeSlice.reducer;
