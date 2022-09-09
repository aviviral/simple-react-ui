import React from 'react'
import {Box,TextField,Typography,Container,Grid,Button} from "@mui/material"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
  return (
    <Container maxWidth="md" sx={{mx:"auto",my:"10vh"}}>
    <Grid container spacing={2} sx={{alignItems:"center"}}>
     <Grid item xs={6} md={4}>
        <Box sx={{display:"flex"}}>
            <MonetizationOnIcon/>
        <Typography sx={{ml:1}} variant="h6">Outli</Typography>
         </Box>
         <Typography sx={{textAlign:"left",my:2}}>We use multi-mic and echo cancellation technology so that everyone can use device</Typography>
         <Box  sx={{display:"flex",justifyContent:"space-evenly"}}>
            <FacebookRoundedIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
         </Box>
     </Grid>
     <Grid item xs={6} md={8} sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
            <Typography variant="h5">Resoureces</Typography>
            <Typography>Features</Typography>
            <Typography>Pricing</Typography>
            <Typography>Login</Typography>
        </Box>
        <Box>
            <Typography variant="h5">Legal</Typography>
            <Typography>Terms of Use</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Legal Notice</Typography>
        </Box>
        <Box>
            <Typography variant="h5">Links</Typography>
            <Typography>Feedback</Typography>
            <Typography>privacy</Typography>
            <Typography>Legal Notice</Typography>
        </Box>
     </Grid>
    </Grid>
     </Container>
  )
}

export default Footer