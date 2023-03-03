import React from 'react';
import {setTimeSpan} from "../../features/historySlice"
import { useDispatch } from 'react-redux';
import "./timespan.css";

const TimeSpan = () => { 
    
    const dispatch = useDispatch();
  //SETTING TIME SPAN ON CLICK
    const handleClick = (e) => {
        dispatch(setTimeSpan(e.target.value));
    };

    
  return (
    <div className='time-span-container'>
    <div className='time-btn-container'>
      <button className="time-btn" value={"1"} onClick={handleClick}>1D</button>
      <button className="time-btn" value={"7"} onClick={handleClick}>7D</button>
      <button className="time-btn" value={"21"} onClick={handleClick}>3W</button>
      <button className="time-btn" value={"30"} onClick={handleClick}>1M</button>
      <button className="time-btn" value={"180"} onClick={handleClick}>6M</button>
      <button className="time-btn" value={"365"} onClick={handleClick}>1Y</button>
    </div>
    </div>
  )
}

export default TimeSpan
