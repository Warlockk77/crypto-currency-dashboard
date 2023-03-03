import React from 'react';
import moment from 'moment/moment';
import {useGetMarketStatsQuery} from '../../features/api/marketSlice';
import { useSelector } from 'react-redux';
import  DotLoader  from 'react-spinners/DotLoader';
import "./charts.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VeticalBarChart = () => {
    

  // GETTING CRYPTOCURRENCY
    const myCoin  = useSelector(
        (state)=> state.selectCrypto.selectedCrypto
    );

    // GETTING CURRENCY
    const myCurrency  = useSelector(
        (state)=> state.selectCurrency.selectedCurrency
    );

    // GETTING TIME
    const myTimeSpan = useSelector((state) => state.selectTimeSpan.selectedTimeSpan);



    //DATA FROM STORE
    const {data:cryptoStats, isLoading} = useGetMarketStatsQuery({
        coin:myCoin,
        currency:myCurrency,
        time:myTimeSpan
    })



    //COIN STATS
    const coinStats = cryptoStats?.prices;

    const chartStats = coinStats.map((value) => ({
        x: value[0],
        y: value[1]
    }));



    //CHART OPTIONS
    const options = {
        responsive: true,
        animation: {
          animateScale: true,
        },
        maintainAspectRatio:false,
        plugins: {
          legend: {
            position: "top",
            align: "end",
          },
          datalabels: {
            display: false,
        },
        },
        datalabels: {
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 32);
            return {
              size: size,
              weight: 600,
            };
          },
          formatter: function (value) {
            return Math.round(value * 10) / 10;
          },
        },
        title: {
          display: true,
          text: "Bar Chart",
        },
    
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
      };






      //CHART DATA
      const data = {
        labels: chartStats.map((value) => moment(value.x).format("MMM Do")),
        datasets: [
          {
            label: myCoin
              ? `${myCurrency.toUpperCase()} vs ${myCoin.toUpperCase()}  `
              : myCurrency.toUpperCase(),
            data: chartStats?.map((val) => val.y),
            borderColor: "#0181DF",
        backgroundColor: "#FE5E03",
        
            
          },
        ],
      };
  return (
    <div className='bar-chart'>
      <DotLoader size={10} loading={isLoading} />

      <Bar data={data} options={options} />
    </div>
  )
}

export default VeticalBarChart
