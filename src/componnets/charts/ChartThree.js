import React from "react";
import { Divider } from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import AccountGraph from "./Graphs/AccountGraph";
import CashFlowGraph from "./Graphs/CashFlowGraph";
const ChartThree = () => {
  return (
    <div className="chart three">
      <div className="subHeads">
        <h4>Total cash Flow</h4>
        
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <SquareRoundedIcon style={{ color: "#02BB7D" }} />
            <label style={{ marginRight: "13px" }}>In</label>
            <SquareRoundedIcon style={{ color: "#47B747" }} />
            <label>Out</label>
          </div>
      </div>
      <Divider />
      <CashFlowGraph />
    </div>
  );
};

export default ChartThree;
