import { Paper, Typography, Box,Container } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Paper
      sx={{
        p: 3,
      }}
    >
      <Container minWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "40%",
        }}
      >
        <Typography>Outli</Typography>
        <Typography>How it works</Typography>
        <Typography>Ecommerce</Typography>
        <Typography>About us</Typography>
      </Box>
      </Container>
    </Paper>
  );
};

export default Navbar;
