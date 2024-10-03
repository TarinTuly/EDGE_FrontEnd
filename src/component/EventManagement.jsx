import { Button } from "@mui/material";
import React from "react";

function EventManagement() {
  const handleButtonClick = () => {
    alert("Button clicked");
  };
  return (
    <div>
      <Button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#A594F9",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Click me
      </Button>
    </div>
  );
}

export default EventManagement;
