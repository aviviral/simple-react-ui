import React from 'react'
import {Box,TextField,Typography,Container,Grid,Button} from "@mui/material"

const Invoice = () => {
  return (
    <Container maxWidth="md" sx={{mx:"auto",my:"10vh"}}>
    <Grid container spacing={2} sx={{alignItems:"center"}}>
     <Grid item xs={6}>
       <Typography variant="h4">Create Beautiful Invoice In No Time</Typography>
       <Typography>No need to compose emails and attach invoices manually. With Incomee you can create and send elegant and modern incoices with no effort.</Typography>
     </Grid>
     <Grid item xs={6}>
         <img style={{width:"100%"}} src="https://cdn.dribbble.com/users/231089/screenshots/5453596/brandmates_-_2_4x.png?compress=1&resize=768x576&vertical=top"/>
     </Grid>
    </Grid>
     </Container>
  )
}

export default Invoice