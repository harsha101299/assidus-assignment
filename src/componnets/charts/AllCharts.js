import React, { useState } from "react";
import ChartOne from "./ChartOne";
import "./charts.css";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import ChartFour from "./ChartFour";

const AllCharts = () => {
  // const [ConsBarData,setConsBarData]= useState([])
  return (
    <div className="allCharts">
      <ChartOne />
      <ChartTwo />
      <ChartThree />
      <ChartFour />
    </div>
  );
};

export default AllCharts;
