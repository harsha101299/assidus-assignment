import React, { useContext, useState } from "react";
import { Button, Divider, FormControl, MenuItem, Select } from "@mui/material";
import AccountGraph from "./Graphs/AccountGraph";
import GraphContext from "../context/Graph-context";

const ChartOne = () => {
  const {month,type,MonthHandler,TypeHandler} = useContext(GraphContext)
  // const [month, setMonth] = useState("jan");
  // const [type, setType] = useState("manage");

  // const MonthHandler = (e) => {
  //   setMonth(e.target.value);
  // };
  // const TypeHandler = (e) => {
  //   setType(e.target.value);
  // };
  return (
    <div className="chart one">
      <div className="subHeads">
        <h4>Checking account</h4>
        <span>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Select
                sx={{
                  "& .MuiSelect-select": {
                    paddingRight: 8,
                    paddingLeft: 10,
                    paddingTop: 2,
                    paddingBottom: 4,
                    border: "2px solid #e1dbdb",
                    zIndex: 12,
                  },
                  marginRight: "10px",
                }}
                defaultValue={"manage"}
                onChange={TypeHandler}
              >
                <MenuItem value="manage">Manage</MenuItem>
                <MenuItem value="other">other</MenuItem>
              </Select>
              <Select
                sx={{
                  "& .MuiSelect-select": {
                    paddingRight: 8,
                    paddingLeft: 10,
                    paddingTop: 2,
                    paddingBottom: 4,
                    border: "2px solid #e1dbdb",
                    zIndex: 12,
                  },
                }}
                defaultValue={"Jan"}
                onChange={MonthHandler}
              >
                <MenuItem value="Jan">January</MenuItem>
                <MenuItem value="Feb">February</MenuItem>
                <MenuItem value="Mar">March</MenuItem>
                <MenuItem value="Apr">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="Jun">June</MenuItem>
                <MenuItem value="Jul">July</MenuItem>
                <MenuItem value="Aug">August</MenuItem>
                <MenuItem value="Sep">September</MenuItem>
                <MenuItem value="Oct">October</MenuItem>
                <MenuItem value="Nov">November</MenuItem>
                <MenuItem value="Dec">December</MenuItem>
              </Select>
            </div>
          </div>
        </span>
      </div>
      <Divider />
      <AccountGraph />
    </div>
  );
};

export default ChartOne;
