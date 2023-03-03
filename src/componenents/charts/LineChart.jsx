import React from "react";

import moment from "moment/moment";
import { useSelector } from "react-redux";
import DotLoader from "react-spinners/DotLoader";
import "./charts.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGetMarketStatsQuery } from "../../features/api/marketSlice";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function LineChart() {

  //GETTING CRYPTOCURRENCY 
  const myCoin = useSelector(
    (state) => state.selectCrypto.selectedCrypto
  );

 //GETTING CURRENCY
  const myCurrency = useSelector(
    (state) => state.selectCurrency.selectedCurrency
  );
   //GETTING TIME
  const myTimeSpan = useSelector((state) => state.selectTimeSpan.selectedTimeSpan);

  //FETCHING DATA
  const { data: cryptoStats, isLoading } = useGetMarketStatsQuery({
    coin: myCoin,
    currency: myCurrency,
    time: myTimeSpan,
  });

  const coinsStats = cryptoStats?.prices;

  const chartStats = coinsStats?.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  //CHART OPTIONS
  const options = {
    responsive: true,
    animation: {
      animateScale:true,
     
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
    title: {
      display: true,
      text: "Line Chart",
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
  };

  

  //CHART DATA
  const data = {
    labels: chartStats?.map((value) => moment(value.x).format("MMM Do")),
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
    <div className="line-chart-container">
      <DotLoader className="loader" color="rgb(0, 51, 102)" size={48} loading={isLoading} />
      
      <Line size={10} data={data} options={options} />
      
      
    </div>
  );
}

export default LineChart;
