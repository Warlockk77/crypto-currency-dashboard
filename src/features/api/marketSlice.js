import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoMarketStatsApi = createApi({
  name: "cryptoMarketStatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
    getMarketStats: builder.query({
      query: (args) => {
        const { coin, currency, time } = args;
        return {
          url: `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`,
        };
      },
    }),
    getExchangeStats: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketStatsQuery, useGetExchangeStatsQuery } =
  cryptoMarketStatsApi;
