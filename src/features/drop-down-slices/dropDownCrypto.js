import { createSlice } from "@reduxjs/toolkit";

const initialCryptoCurrency = {
  selectedCrypto: "bitcoin",
};

export const dropDownCryptoSlice = createSlice({
  name: "selectCrypto",
  initialState: initialCryptoCurrency,
  reducers: {
    setCrypto: (state, action) => {
      state.selectedCrypto = action.payload;
    },
  },
});

export const { setCrypto } = dropDownCryptoSlice.actions;
export default dropDownCryptoSlice.reducer;
