import React from "react";
import { Button, TextField, Typography, Container, Box } from "@mui/material";

export default function RegistrationForm() {
  const handleButtonClick = () => {
    alert("Registration submitted!");
  };
  const[count,setcount]=React.useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
 
  const handleIncrement=()=>{
    console.log(count+1);
  };
  const handleDecrement=()=>{
   console.log(count-1);
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Registration Form
        </Typography>
        
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            name="name"
            onChange={handleChange}
            required
          />
        </Box>
        
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            required
          />
        </Box>

        <Button
          variant="contained"
          onClick={handleButtonClick}
          fullWidth
          sx={{
            backgroundColor: "#A594F9",
            color: "white",
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: "#8c7ae6", // Darker shade on hover
            },
          }}
        >
          Submit
        </Button>

      </Box>
      <Button 
       onClick={handleIncrement} 
      sx={{
        backgroundColor: "green", // Set background color
        color: "white",
        fontWeight: "bold",
       
      }}
      >Increamet</Button>
      <Button
      onClick={handleDecrement}
        sx={{
          backgroundColor: "Red",
          color: "white",
          fontWeight: "bold",
          
        }}
      >Decreamet</Button>
    </Container>

    
  );
}
