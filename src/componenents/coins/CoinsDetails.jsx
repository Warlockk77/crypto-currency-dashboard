import React from 'react';
import { useGetCryptoMarketsQuery } from '../../features/api/coinSlice';
import SingleCoin from './SingleCoin';
import DotLoader from 'react-spinners/DotLoader';

const CoinsDetails = () => {

    //FETCHING CRYPTO MARKET STATS DATA
    const {data, isFetching} = useGetCryptoMarketsQuery();

   

  return (
    <div className='side-container'>
    <div className='coin-container'>
        <h2>Cryptocurrency By Market Cap</h2>
        <DotLoader  className='side-loader' loading={isFetching}/>
        <div>
            {data && data.map((coin) => <SingleCoin key={coin.id} coin={coin} />)}
        </div>

    </div>   
    </div>
  )
}

export default CoinsDetails;