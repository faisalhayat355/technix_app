import React from 'react'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Card, Grid, IconButton, Pagination, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import InfoComponent from './InfoComponent';
const ListComponent = () => {
  return (
    <div>
       <Card style={{width:'96%',marginTop:'1rem'}}>
       <Box mr={2} mt={1} style={{marginLeft:'1rem'}}>
        <Paper variant="outlined">
          <Grid container>
            <Grid item xs={3}>
              <Typography style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}>
                Name
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}>
                Description
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                display={"flex"}
                justifyContent={"space-around"}
                style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}
              >
                Price
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
               style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}
                display={"flex"}
                justifyContent={"space-around"}
              >
                Category
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
              style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}
                display={"flex"}
                justifyContent={"space-around"}
              >
                Created At
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                display={"flex"}
                justifyContent={"space-around"}
                style={{fontWeight:'bold',fontSize:'0.9rem',color:'#475569'}}
              >
                Updated At
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
       


      <Grid style={{ height: "60vh" }}>
        {/* {paginationHandler
          .currentData()
          .reverse()
          ?.map((items: IProject, index: number) => {
            return (
              <Typography key={index}>
                <InfoProjectComponent items={items} />
              </Typography>
            );
          })} */}
          <InfoComponent/>
      </Grid>

      </Card>


      <Grid container mt={4}>
        <Grid item xs={11.6} display={"flex"} justifyContent={"flex-end"}>
          <Grid style={{ position: "fixed" }}></Grid>
          <Pagination
            size="small"
            variant="outlined"
            color="primary"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default ListComponent