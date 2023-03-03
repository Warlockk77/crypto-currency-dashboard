import React from 'react';
import { useState } from 'react';
import {useGetExchangeStatsQuery} from "../../features/api/marketSlice";
import {useGetAllCurrenciesQuery} from "../../features/api/currencySlice";
import {RiExchangeDollarFill} from "react-icons/ri";
import './exchange.css';

const Exchange = () => {

    const [inputValue, setInputValue] = useState("");
    const [sellCurrency, setSellCurrency] = useState("btc");
    const [buyCurrency, setBuyCurrency] = useState("btc");
    const [exchangedValue, setExchangedValue] = useState(" ");

    const  {data: currencyList} = useGetAllCurrenciesQuery();
  const {data: exchangeData, isFetching} = useGetExchangeStatsQuery();


  //FUNCTIONS

  // SELL VALUE
  const handleBuy = (e) => {
    setBuyCurrency(e.target.value);
  };
  
  //BUY VALUE
  const handleSell = (e) => {
    setSellCurrency(e.target.value);
  }
  
  //EXCHANGE RATE CALCULATOR
  const calculateRates = (rateValue) => {
    const calculatedRate = ((parseFloat(rateValue) * parseFloat(exchangeData && exchangeData.rates[buyCurrency].value)))/parseFloat(exchangeData && exchangeData?.rates[sellCurrency].value).toFixed(4);

    return calculatedRate ;

  }

   //EXCHANGE BUTTON CLICK HANDLER
   const handleClick = () => {
    setExchangedValue(calculateRates(inputValue));
  }

  return (
    <div className='exchange-container'>
        <div>
            <h5>Exchange Coins</h5>
            <div className='exchange-top'>
                <p>Sell</p>
                <div>
                    <select className="select sell-select" onChange={handleSell} value={sellCurrency}>
                        <option value="sellCurrency" disabled>
                            BTC
                        </option>
                        {
                            currencyList && currencyList.map((curr)=> (
                                <option value={curr} key={curr}>
                        {curr.toUpperCase()}
                                </option>
                            ))
                        }
                    </select>
                </div>
                    <input value={inputValue} placeholder="Avl 0.0025" onChange={(e) => setInputValue(e.target.value)}/>
            </div>
            <div className='exchange-bottom'>
                <p>Buy</p>
                <div>
                    <select className='select buy-select' onChange={handleBuy} value={buyCurrency}>
                      <option value="sellCurrency" disabled>
                          BTC
                      </option>
                      {
                        currencyList && currencyList.map((curr) => (
                            <option value={curr} key={curr}>
                                {curr.toUpperCase()}
                            </option>
                        ))
                      }
                    </select>
                </div>
                <h5 className='exchanged-value'>{exchangedValue}</h5>
            </div>
        </div>
        <div className='btn-div'>
        <button className='exchange-btn' onClick={handleClick}><RiExchangeDollarFill className='ex-icon'/>Exchange</button>
        </div>
    </div>
  )
}

export default Exchange