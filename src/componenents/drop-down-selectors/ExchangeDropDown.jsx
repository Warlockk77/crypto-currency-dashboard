import React from 'react';
import { useDispatch, useSelector
 } from 'react-redux';
 import { setCurrency } from '../../features/drop-down-slices/dropDownCurrency.js';
 import { useGetAllCurrenciesQuery } from '../../features/api/currencySlice';

const ExchangeDropDown = () => {

    const dispatch = useDispatch();

    const currency = useSelector(
        (state) => state.selectCurrency.selectedCurrency
    );

    const handleChange = (e) => {
          dispatch(setCurrency(e.target.value))
    }

    const {data: currencyList} = useGetAllCurrenciesQuery();


  return (
    <div>
      <select onChange={handleChange} value={currency}>
        <option disabled>Vs_Currency</option>
       {currencyList && currencyList.map((curr)=> (
        <option value={curr} key={curr}>
            {curr}
        </option>
       ))}
      </select>
    </div>
  )
}

export default ExchangeDropDown
