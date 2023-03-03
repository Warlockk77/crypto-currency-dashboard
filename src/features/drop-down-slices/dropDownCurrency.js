import { createSlice } from "@reduxjs/toolkit";

const initialCurrency = {
  selectedCurrency: "usd",
};

export const dropDownCurrencySlice = createSlice({
  name: "selectCurrency",
  initialState: initialCurrency,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = dropDownCurrencySlice.actions;
export default dropDownCurrencySlice.reducer;
