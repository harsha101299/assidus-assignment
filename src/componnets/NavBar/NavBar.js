import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import Notifications from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import profile from '../../images/profile.png'

const NavBar = () => {
  return (
    <div>
      <AppBar sx={{position:"fixed",height: "50px" ,justifyContent:"center",zIndex:9}} variant="primary">
        <Toolbar sx={{ justifyContent: "flex-end", margin: 2 }}>
          <Box
            sx={{
              "& > :not(style)": { width: "200px", height: "30px" },
            }}
            noValidate
          >
            <Input
              id="input-with-icon-adornment"
              sx={{
                p: 2,
                backgroundColor: "#F6F7F9",
                borderRadius: "10px",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </Box>
          <IconButton sx={{ p: 30 }} size="small">
            <Notifications color="success" fontSize="small" />
          </IconButton>
          {/* <IconButton sx={{ p: 3 }} size="large">
            <AccountCircleRoundedIcon color="success" fontSize="large" />
          </IconButton> */}
          <img alt="profile pic" style={{borderRadius:"50%",height:"40px",paddingRight:"10px"}} src={profile}  />
          <IconButton sx={{ p: 1 ,paddingRight:"30px"}} size="large">
            <ArrowDropDownRoundedIcon color="success" fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
