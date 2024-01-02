import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import { GraphContextProvider } from "./componnets/context/Graph-context"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    success: {
      main: "#000",
    },
    error: {
      main: "#1b5e20",
    },
    modal: {
      main: "#30e1b0",
    },
    threeBox: {
      main: "#f0f0f0",
    },
  },

  spacing: 1,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GraphContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GraphContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
