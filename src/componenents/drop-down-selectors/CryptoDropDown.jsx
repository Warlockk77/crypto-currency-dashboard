import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCrypto } from '../../features/drop-down-slices/dropDownCrypto';
import {useGetCoinsQuery} from '../../features/api/coinSlice';
import "./drop-down.css";

const CryptoDropDown = () => {
    

    //GETTING CRYPTO CURRENCY 
    const crypto = useSelector((state) => state.selectCrypto.selectedCrypto);

    const dispatch = useDispatch();

    const {data: coinList} = useGetCoinsQuery();


    //SETTING THE VALUE TO SELECTED CRYPTO
    function handleChange(e) {
        dispatch(setCrypto(e.target.value));
    }


  return (
    <div className='crypto-drop-down-container'>
        <select className='crypto-select' onChange={handleChange} value={crypto}>
            <option value="crypto" disabled>
                Crypto Currency
            </option>
            {coinList && coinList.map((item) => (
                <option value={item.id} key={item.id}>
                    {item.name.toUpperCase()}
                </option>
            ))}
        </select>
      
    </div>
  )
}

export default CryptoDropDown
