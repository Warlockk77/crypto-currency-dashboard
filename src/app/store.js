//STORE CONFIGURATION
import { configureStore } from "@reduxjs/toolkit";
import { cryptoCoinApi } from "../features/api/coinSlice";
import { currencyApi } from "../features/api/currencySlice";
import { cryptoMarketStatsApi } from "../features/api/marketSlice";
import timeSpanReducer from "../features/historySlice";
import typeOfChartReducer from "../features/typeOfChart";
import dropDownExchangeReducer from "../features/exchangeSlice";
import dropDownCurrencyReducer from "../features/drop-down-slices/dropDownCurrency.js";
import dropDownCryptoReducer from "../features/drop-down-slices/dropDownCrypto";

//REDUCERS AND MIDDLEWARES
export const store = configureStore({
  reducer: {
    [cryptoCoinApi.reducerPath]: cryptoCoinApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [cryptoMarketStatsApi.reducerPath]: cryptoMarketStatsApi.reducer,
    selectCurrency: dropDownCurrencyReducer,
    selectCrypto: dropDownCryptoReducer,
    selectTimeSpan: timeSpanReducer,
    exchangeCurrency: dropDownExchangeReducer,
    selectChartType: typeOfChartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoCoinApi.middleware)
      .concat(currencyApi.middleware)
      .concat(cryptoMarketStatsApi.middleware),
});
