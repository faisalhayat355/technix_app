import React from 'react'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";
const InfoComponent = () => {
  return (
    <div>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>
       <InfoData/>


       
    </div>
  )
}

export default InfoComponent

const InfoData=()=>{
    return(
        <div>
            <Box mr={2} mt={-0.2} style={{marginLeft:'1rem'}}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={3}>
              <Typography style={{fontSize:'0.9rem',color:"#475569",padding:'0.2rem'}}>
                Faisal Hayat
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography style={{fontSize:'0.9rem',color:"#475569"}}>
              Lorem Ipsum is simply dummy
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                display={"flex"}
                justifyContent={"space-around"} style={{fontSize:'0.9rem',color:"#475569"}}
              >
                299
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
               style={{fontSize:'0.9rem',color:"#475569"}}
                display={"flex"}
                justifyContent={"space-around"}
              >
                Bag
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                display={"flex"}
                justifyContent={"space-around"} style={{fontSize:'0.9rem',color:"#475569"}}
              >
                
                11/11/2024
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                display={"flex"}
                justifyContent={"space-around"}
                style={{fontSize:'0.9rem',color:"#475569"}}
              >
                13/01/2024
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
        </div>
    )
}