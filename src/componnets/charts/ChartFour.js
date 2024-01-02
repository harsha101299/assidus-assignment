import React, { useContext } from "react";
import { Divider } from "@mui/material";
import GraphContext from "../context/Graph-context";

const ChartFour = () => {

  const {WatchList} = useContext(GraphContext)

  return (
    <div className="chart four">
      <div className="subHeads">
        <h4>Account watchlist</h4>
      </div>
      <Divider />
      {/* <section>
        <div className="TableHeadings ColumnNames">
          <span>Account</span>
          <div className="RightColumns">
            <span>This Month</span>
            <span>YTD</span>
          </div>
        </div>
        {tableData.map((item) => (
          <div className="TableHeadings">
            <span>{item.acc}</span>
            <div className="RightColumns">
              <span>{item.mo}</span>
              <span>{item.yd}</span>
            </div>
          </div>
        ))}
      </section> */}
      <section className="watchlist">
        <div className="leftPart data">
          <span className="tableHeadings">Account</span>
          {WatchList.map((item) => (
            <span key={item.acc} >{item.acc}</span>
          ))}
        </div>
        <div className="RightPart">
          <div className="data">
            <span className="tableHeadings">This Month</span>
            {WatchList.map((item) => (
              <span key={item.mo} >{item.mo.toLocaleString()}</span>
            ))}
          </div>
          <div className="data">
            <span className="tableHeadings">YTD</span>
            {WatchList.map((item) => (
              <span key={item.yd} >{item.yd.toLocaleString()}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartFour;
