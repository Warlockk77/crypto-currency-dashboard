import React from "react";

import { useDispatch } from "react-redux";
import { setCurrency } from "../../features/drop-down-slices/dropDownCurrency";
import { useSelector } from "react-redux";
import { useGetAllCurrenciesQuery } from "../../features/api/currencySlice";
import "./drop-down.css"


const CurrencyDropDown = () => {

    const currency = useSelector(
        (state) => state.selectCurrency.selectedCurrency
    );

    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setCurrency(e.target.value));
    }

    const {data:currencyList} = useGetAllCurrenciesQuery();

return (
    <div  className="curr-dd" >
        <select onChange={handleChange} value={currency}>
            <option value="currency" disabled>
                Currency
            </option>
            {currencyList&&currencyList.map((curr)=> (
                <option value={curr} key={curr}>
                    {curr.toUpperCase()}
                </option>
            )
            )}
        </select>

    </div>
)
}

export default CurrencyDropDown;