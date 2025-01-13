import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Avatar from '@mui/material/Avatar';
const HeaderComponent = () => {
  return (
    <Grid container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Typography style={{fontSize:'1.2rem'}}>Accounting</Typography>
          </Grid>
          <Grid item xs={5}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={7.8}>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 2px",
                    display: "flex",
                    alignItems: "center",
                    width: 300,
                    height:30
                  }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={1.2}>
                <Typography>Help</Typography>
              </Grid>

              <Grid item xs={1.2}>
                <NotificationsIcon />
              </Grid>

              <Grid item xs={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default HeaderComponent;
