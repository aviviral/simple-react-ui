import React from 'react'
import {Box,TextField,Typography,Container,Grid,Button,Card} from "@mui/material"

const Investor = () => {
  return (
    <Container maxWidth="md" sx={{mx:"auto",my:"10vh"}}>
    <Grid container spacing={2} sx={{alignItems:"center"}}>
    <Grid item xs={6} sm={4}>
         <img style={{width:"100%"}} src="https://www.codiant.com/assets/images/services/bitcoin-development/bitcoin-exchange.webp"/>
     </Grid>
     <Grid item xs={6} sm={8}>
 
  <Typography variant="h5">Invest Like An Outlier.</Typography>
  <Typography>
No need to compose emails and attach invoices manually. With Incomee you can create and send elegant and modern invoices with no effort.
</Typography>
<Box sx={{display:"flex",justifyContent:"space-between"}}>
<Card variant="outlined" sx={{m:2}}>
    <Typography variant="h6">
        Automate Rules
    </Typography>
    <Typography>No need to compose emails and attach invoices manually</Typography>
</Card>
<Card variant="outlined" sx={{m:2}}>
    <Typography variant="h6">
        Create Account
    </Typography>
    <Typography>No need to compose emails and attach invoices manually</Typography>
</Card>
</Box>
<Box sx={{display:"flex",justifyContent:"space-between"}}>
<Card variant="outlined" sx={{m:2}}>
    <Typography variant="h6">
       Check Balance
    </Typography>
    <Typography>No need to compose emails and attach invoices manually</Typography>
</Card>
<Card variant="outlined" sx={{m:2}}>
    <Typography variant="h6">
        Buy Anything
    </Typography>
    <Typography>No need to compose emails and attach invoices manually</Typography>
</Card>
</Box>
     </Grid>
    
    </Grid>
     </Container>
  )
}

export default Investor