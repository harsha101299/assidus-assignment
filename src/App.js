import React from "react";
import "./App.css";
import NavBar from "./componnets/NavBar/NavBar";
import SideDrawer from "./componnets/sideBar/Sidebar";
import AllCharts from "./componnets/charts/AllCharts";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Dashboard");

  const GetCurrentTab = (text) => {
    setCurrentTab(text);
  };
  return (
    <div className="App">
      {currentTab.includes("Dashboard") && <AllCharts />}
      {currentTab.includes("Accounts") && <AllCharts />}
      {currentTab.includes("Payroll") && <AllCharts />}
      {currentTab.includes("Reports") && <AllCharts />}
      {currentTab.includes("Advisor") && <AllCharts />}
      {currentTab.includes("Contacts") && <AllCharts />}
      <div>
        <NavBar />
      </div>
      <div>
        <SideDrawer GetCurrentTab={GetCurrentTab} />
      </div>
    </div>
  );
}

export default App;
