import * as React from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Dashboard from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";
import Adissus from "../../images/Assiduus.png";
import "./sideBar.css";
import { useState } from "react";

export default function SideDrawer({GetCurrentTab}) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const list = () => (
    <Box sx={{ width: 200 }}>
      <List>
        {[
          "Dashboard",
          "Accounts",
          "Payroll",
          "Reports",
          "Advisor",
          "Contacts",
        ].map((text, index) => (
          <ListItem
            className={`${activeTab.includes(text) && "activeTab"} allList`}
            key={text}
            disablePadding
            id={text + index}
          >
            <ListItemButton
              onClick={(e) => {
                console.log(e.target.tagName)
                if(e.target.tagName == 'SPAN' ){
                  setActiveTab(e.target.innerHTML);
                  GetCurrentTab(e.target.innerHTML)
                }else if(e.target.tagName == 'path' || e.target.tagName == 'svg'){
                  let ele = e.target
                  var parent = ele.parentElement
                  var parent_parent = parent.parentElement
                  setActiveTab(parent_parent.id);
                  GetCurrentTab(parent_parent.id)
                }else{
                GetCurrentTab(e.target.id)
                setActiveTab(e.target.id);
                }
              }}
              id={text + index}
            >
              {/* style={{ color: "white" }} */}
              <ListItemIcon id={text + index}>
                {text == "Dashboard" && (
                  <Dashboard
                  id={text + index}
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
                {text == "Accounts" && (
                  <AccountBalanceWalletIcon
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
                {text == "Payroll" && (
                  <AttachMoneyIcon
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
                {text == "Reports" && (
                  <DescriptionIcon
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
                {text == "Advisor" && (
                  <PersonIcon
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
                {text == "Contacts" && (
                  <ContactsIcon
                    className={
                      activeTab.includes(text) ? "activeIcon" : "notactiveIcon"
                    }
                  />
                )}
              </ListItemIcon>
              {activeTab.includes(text) ? (
                <ListItemText
                  id={text + index}
                  sx={{ color: "white" }}
                  primary={text}
                />
              ) : (
                <ListItemText
                  id={text + index}
                  sx={{ color: "black" }}
                  primary={text}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      sx={{ position: "fixed", zIndex: 10 }}
      variant="persistent"
      anchor="left"
      hideBackdrop={true}
      open={true}
    >
      <img src={Adissus} className="logo" />
      {list("left")}
    </Drawer>
  );
}
