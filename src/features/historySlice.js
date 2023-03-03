import { createSlice } from "@reduxjs/toolkit";

const initialTimeSpan = {
  selectedTimeSpan: "7",
};

export const timeSpanSlice = createSlice({
  name: "selectTimeSpan",
  initialState: initialTimeSpan,
  reducers: {
    setTimeSpan: (state, action) => {
      state.selectedTimeSpan = action.payload;
    },
  },
});

export const { setTimeSpan } = timeSpanSlice.actions;
export default timeSpanSlice.reducer;
