import React from 'react'
import {Box,TextField,Typography,Container,Grid,Button} from "@mui/material"

const Main = () => {
  return (
    <Container maxWidth="md" sx={{mx:"auto",my:"10vh"}}>
   <Grid container spacing={2} sx={{alignItems:"center"}}>
    <Grid item xs={6}>

        <Typography variant="h3">Investing For Outliers.</Typography>
        <Typography>Invest your spare change in Bitcoin and save with crypto to earn intrest in real time.</Typography>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <TextField id="outlined-basic" label="Mobile"       size="small" />
      <Button variant="contained">Get Started</Button>
      </Box>


    </Grid>
    <Grid item xs={6}>
        <img src="https://www.aitrillion.com/wp-content/uploads/2019/12/first-3.png"/>
    </Grid>
   </Grid>
    </Container>
  )
}

export default Main