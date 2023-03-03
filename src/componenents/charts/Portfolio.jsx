import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import './charts.css';




ChartJS.register(ArcElement, Tooltip, Legend , ChartDataLabels);
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className='portfolio-top'>
        <h1 >Portfolio</h1>
        <div>
          <h4>Total Value <strong>$1000</strong></h4>
          
        </div>
      </div>
      <div > 
      {/* PIE CHART */}
        <Pie className="pie" data={{
  labels: ['Tether', 'Luna', 'Ethereum'],
  datasets: [
    {
      label: 'PortFolio',
      data: [250, 400, 350],
      backgroundColor: [
        '#EF2A2A',
        '#8CDF7F',
        '#0191DF',      
      ],
      borderColor: [
        '#B5C3C6'
      ],
      borderWidth: 2,
    },
  ],
}} plugins={[ ChartDataLabels]}  options={{maintainAspectRatio: false ,plugins: {
  legend: {
    display: true,
    position:"right",
    labels: {
      usePointStyle: true,
      pointStyle: "circle"
      // boxWidth: 5
    }
  },
  
  datalabels: {
    display: true,
    color: "white",
    align: "center",
    padding: {
      right: 2
    },
    labels: {
      title: {
        font: {
          weight: "bold",
          size:18
        }
      },
    },}
}}}/>
      </div>
    </div>
  )
}

export default Portfolio