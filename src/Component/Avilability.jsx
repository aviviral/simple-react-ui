import React from 'react'
import {Card,Box,Typography,Container} from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MoneyIcon from '@mui/icons-material/Money';

const Avilability = () => {

    const data=[
        {
        image:<AccountBalanceIcon/>,
        name:"Connect your bank",
        details:"Invest you bitcoin on the regular or save with one of the highest intrest rates market"
    },
        {
        image:<AssessmentIcon/>,
        name:"Pick your asseets+",
        details:"Invest you bitcoin on the regular or save with one of the highest intrest rates market"
    },
        {
        image:<MoneyIcon/>,
        name:"Cash Out anytime",
        details:"Invest you bitcoin on the regular or save with one of the highest intrest rates market"
    }
]
  return (
<Container maxWidth="md" sx={{display:"flex",justifyContent:"space-around"}}>  
  {data.map(el=><Card variant="outlined" sx={{m:2,p:2}}>{el.image} <Typography variant="h5">{el.name}</Typography>
  <Typography>{el.details}</Typography>
  </Card>)}
   </Container>
  )
}

export default Avilability