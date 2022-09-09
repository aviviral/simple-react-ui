import React from 'react'
import {Typography,Container,Card,CardHeader,Avatar,Grid,Box} from "@mui/material"
import { red,purple,sky,blue } from '@mui/material/colors';
import image from "../public/image.jpeg"

const Developer = () => {
  return (
    <Container maxWidth="md" sx={{mx:"auto",my:"10vh"}}>
        <Typography variant="h5">"It's Easy, It's Fun, And It's Got Charm<br/> To Burn. "</Typography>
     <Grid container spacing={2}>

     <Grid item sm={6} md={4}> 
         <Card sx={{p:2}}>
             <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            M
          </Avatar>
        }

        title="Mansur Doe"
        subheader="Product Designer"
      />
      <Typography>we now have confidence in the quality of our leads.Their support team is incredible too. Really smart Guys who core about helping</Typography>
      </Card>
      </Grid>
     <Grid item sm={6} md={4}>
     <Card sx={{p:2}}>
             <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
            S
          </Avatar>
        }

        title="Shahu Mily"
        subheader="Product Designer"
      />
      <Typography>we now have confidence in the quality of our leads.Their support team is incredible too. Really smart Guys who core about helping</Typography>
      </Card>
     </Grid>
     <Grid item sm={6} md={4}>

     <Card sx={{p:2}}>
             <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            E
          </Avatar>
        }

        title="Edwin Downs"
        subheader="Product Designer"
      />
      <Typography>we now have confidence in the quality of our leads.Their support team is incredible too. Really smart Guys who core about helping</Typography>
      </Card>
     </Grid>
     </Grid>

<Box sx={{mt:4}}><img src={image}/></Box>
    </Container>
  )
}

export default Developer