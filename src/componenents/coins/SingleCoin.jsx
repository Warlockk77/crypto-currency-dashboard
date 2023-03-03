import React from 'react';
import './coins.css';
import {AiOutlineCaretDown, AiOutlineCaretUp} from 'react-icons/ai';
import millify from 'millify';




const SingleCoin = ({coin}) => {

  const Up = coin.price_change_percentage_24h > 0;
  return (
    <div className='single-coin-div'>
      <div className='coin--stats-div'>
      <div className='coin--img-name'>
        <img src={coin.image} className="coin-img"/>
      
      <h3>{coin.name}</h3>
      </div>
      <p>Mkt.Cap ${millify(coin.market_cap)}</p>
      </div>
      <div className='coin--stats-right'>
        {Up? (
          <AiOutlineCaretUp className='up-icon'/>
        ):
        <AiOutlineCaretDown className='down-icon'/>

        } 
      
        <p>{coin.price_change_percentage_24h.toFixed(3)}%</p>
        </div>
     

    </div>
  )
}

export default SingleCoin;

