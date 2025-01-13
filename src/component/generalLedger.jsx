import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CreateProduct from "./CreateProduct";
const GeneralLedger = () => {
  return (
    <div>
      <Grid container mt={1}>
        <Grid item xs={7.75}>
          <Typography style={{fontSize:'1.5rem',fontWeight:'bold'}}>General Ledger</Typography>
        </Grid>
        <Grid item xs={4}>
          <Stack direction="row" spacing={1}>
          <Button 
              >
                {/* Create Product */}
                <CreateProduct/>
              </Button>
            <IconButton>
              <Button
                variant="outlined"
                size="small"
                style={{ textTransform: "capitalize", color: "black" }}
              >
                Show Chart
              </Button>
            </IconButton>
            <IconButton>
              <Button
                variant="outlined"
                size="small"
                style={{color: "black" }}
              >
                <ReplayIcon />
              </Button>
            </IconButton>
            <IconButton>
              <Button
                variant="outlined"
                size="small"
                style={{color: "black" }}
              >
                <MoreHorizIcon />
              </Button>
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default GeneralLedger;
