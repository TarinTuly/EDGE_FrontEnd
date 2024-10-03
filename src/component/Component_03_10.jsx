import { Box, boxClasses, Typography } from "@mui/material";
import React from "react";

function Component_03_10(props) {
  const { productList } = props;
  return (
    <div>
      <Box sx={{ marginTop: 2 }}></Box>
      {productList.map((product) => (
        <Box
          key={product.id}
          sx={{
            border: 1,
            borderColor: "grey.500",
            padding: 2,
            margin: 2,
            backgroundColor: "lightblue",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              backgroundColor: "yellow", // Add background color
              padding: "4px", // Optional: Add padding for better spacing
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "orange", // Change background color on hover
                color: "white", // Optionally change text color on hover
                cursor: "pointer", // Change cursor to pointer on hover
              }, // Optional: Add border radius for rounded corners
            }}
          >
            ID: {product.id}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name: {product.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Details: {product.details}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Size: {product.size.join(", ")}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Color: {product.color.join(", ")}
          </Typography>
        </Box>
      ))}
    </div>
  );
}

export default Component_03_10;
