import React, { useContext, useState } from "react";
import "./ModalForm.css";
import { Button, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { styled } from "@mui/styles";
import GraphContext from "../context/Graph-context";
import CancelIcon from '@mui/icons-material/Cancel';
const ModalForm = () => {

  const {OpenForm,OpenFormHandler} = useContext(GraphContext)

  const CloseForm=()=>{
    OpenFormHandler(OpenForm)
  }

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <div className="overlay"  >
      <div className="Modal">
        <span  onClick={CloseForm} className="cancelIcon" > <CancelIcon sx={{ fontSize: 40 }} /> </span>
        <h2>Add Invoice</h2>
        <form className="invoiceForm">
          <div className="row rowOne">
            <TextField
              id="outlined-text-input"
              
              placeholder="Invoice Name"
              type="text"
              color="modal"
              sx={{
                "& .MuiInputBase-input": {
                  paddingRight: 8,
                  paddingLeft: 10,
                  paddingTop: 2,
                  paddingBottom: 4,
                },
                margin:10
              }}
            />

            <LocalizationProvider
              
              dateAdapter={AdapterDayjs}
            >
              <DemoContainer sx={{"& .MuiStack-root":{
                positionFixed: true,
                overflow:"hidden"
              }}} components={["DesktopDatePicker"]}>
                <DesktopDatePicker
                  sx={{
                    "& .MuiInputBase-input": {
                      paddingRight: 8,
                      paddingLeft: 10,
                      paddingTop: 2,
                      paddingBottom: 4,
                      overflow: "hidden",
                    }
                  }}
                  defaultValue={dayjs("2022-04-17")}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="row rowTwo">
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              color="modal"
              className="upload"
            >
              Upload Invoice
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
          <div className="row rowThree">
            <Button variant="contained" color="error" onClick={CloseForm} >
              Success
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;


