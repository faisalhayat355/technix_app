import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Grid, TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius:'10px'
};

export default function CreateProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        onClick={handleOpen}
        style={{ textTransform: "capitalize", color: "black" }}
      >
        Create Product
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={11}>
              <Typography style={{fontSize:'1.3rem',fontWeight:'500'}}>Product Information</Typography>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={2} mt={3}>
            <Grid item xs={12}>
                <Typography>Name</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" fullWidth size="small"/>
            </Grid>
            <Grid item xs={12} mt={3}>
                <Typography>Description</Typography>
                <TextField id="outlined-basic" label="" variant="outlined" fullWidth size="small"/>
            </Grid>
            <Grid item xs={6}>
            <Typography>Price</Typography>
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth size="small"/>
            </Grid>
            <Grid item xs={6}>
            <Typography>Category</Typography>
            <TextField id="outlined-basic" label="" variant="outlined" fullWidth size="small"/>
            </Grid>

            <Grid item xs={6}>
            <Typography>Created At</Typography>
            <input type="date" id="birthday" name="birthday" style={{border:'1px solid gray',height:'2.4rem',width:'100%',borderRadius:'5px'}}/>
            </Grid>
            <Grid item xs={6}>
            <Typography>Updated At</Typography>
            <input type="date" id="birthday" name="birthday" style={{border:'1px solid gray',height:'2.4rem',width:'100%',borderRadius:'5px'}}/>
            </Grid>

<Grid item xs={12} style={{display:'flex',justifyContent:'flex-end'}} mt={3}>
  <Button variant="outlined" size="small" style={{textTransform:'capitalize'}} onClick={handleClose}>Cancel</Button>
  <Button variant="outlined" size="small" style={{marginLeft:'1rem',textTransform:'capitalize'}}>Save</Button>
</Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
