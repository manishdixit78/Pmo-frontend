import React from "react";
import {
    Chart as ChartJs,
    BarElement,
    LinearScale,
    Title,
    Legend,
    CategoryScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Legend
);

const BarChart = (props) => {
  const { selectedBar, setSelectedBar } = props;
  const labels = ["200", "100", "300"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: [
          "#3CC026",
          "#EB7B14",
          "#EA111E",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [900, 500, 600],
        showTooltips: false,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    onClick: (evt, item) => {
      if (item.length > 0) {
        const index = item[0].index;
        if(index === 0){
             setSelectedBar({
                green: true,
                orange: false,
                red: false
                })
        }
        if(index === 1){
            setSelectedBar({
               green: false,
               orange: true,
               red: false
               })
       }
       if(index === 2){
        setSelectedBar({
           green: false,
           orange: false,
           red: true
           })
        }
        // setSelectedBar({

        // })
        // perform the action you want here, for example:
        console.log(`You clicked on dataset at index ${index}`);
      }
    },
    barThickness: 15,
    // barPercentage: -0.9, // set the width of each bar
    // categoryPercentage: -0.9, // set the width of each category of bars
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
        }
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "100px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
