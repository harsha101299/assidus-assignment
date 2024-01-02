import React, { useContext } from "react";
import { Button, Divider } from "@mui/material";
import InvoiceGraph from "./Graphs/InvoiceGraph";
import ModalForm from "../ModalPopUp/ModalForm";
import GraphContext from "../context/Graph-context";

const ChartTwo = () => {
  const { OpenForm, OpenFormHandler } = useContext(GraphContext);
  // console.log("OpenForm", OpenForm);
  
  const NewSales = () => {
    OpenFormHandler(OpenForm);
  };
  return (
    <div className="chart two">
      {OpenForm && <ModalForm />}
      <div className="subHeads">
        <h4>Invoices owned to you</h4>
        <span>
          <Button
            onClick={NewSales}
            style={{
              fontSize: "10px",
              fontWeight: "400",
              backgroundColor: "#E8EEFD",
              color: "#4FB758",
            }}
            disableElevation
            variant="contained"
          >
            New Sales invoice
          </Button>
        </span>
      </div>
      <Divider />
      <InvoiceGraph />
    </div>
  );
};

export default ChartTwo;
