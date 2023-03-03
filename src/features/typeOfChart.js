import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChartType: "LineChart",
};

export const typeOfChartSlice = createSlice({
  name: "selectChartType",
  initialState,
  reducers: {
    setChartType: (state, action) => {
      state.selectedChartType = action.payload;
    },
  },
});

export const { setChartType } = typeOfChartSlice.actions;
export default typeOfChartSlice.reducer;
