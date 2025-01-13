import { Box, Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterComponent = () => {
  return (
    <div>
      <Box>
        <Grid container mt={1}>
          <Grid item xs={4}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 385,
                height: 30,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
          <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,height:30 }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Fields"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="directions">
        <ExpandMoreIcon/>
      </IconButton>
    </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 386,
                height: 30,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FilterComponent;
