import React from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {setChartType} from "../../features/typeOfChart";
import "./drop-down.css";

const ChartDropDown = () => {
    const dispatch = useDispatch() ;

    const chartType = useSelector((state)=> state.selectChartType.selectedChartType);

    const handleChange = (e) => {
        dispatch(setChartType(e.target.value));
    }
  return (
    <div>
        <select className='chart-select' value={chartType} onChange={handleChange}>
            <option value="chartType" disabled>Chart Type</option>
            <option value={'lineChart'}>Line Chart</option>
            <option value={'verticalBarChart'}>Bar Chart</option>
        </select>
      
    </div>
  )
}

export default ChartDropDown
