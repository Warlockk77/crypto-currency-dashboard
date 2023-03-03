import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoCoinApi = createApi({
  reducerPath: "cryptoCoinApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
    getTopCoins: builder.query({
      query: () => "https://api.coingecko.com/api/v3/search/trending",
    }),

    getCryptoMarkets: builder.query({
      query: () =>
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    }),

    getCoins: builder.query({
      query: () => "https://api.coingecko.com/api/v3/coins/list",
    }),
  }),
});

export const {
  useGetTopCoinsQuery,
  useGetCryptoMarketsQuery,
  useGetCoinsQuery,
} = cryptoCoinApi;
