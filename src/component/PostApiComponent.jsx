import React, { useState } from 'react';
import { Box, TextField ,Button} from '@mui/material';

export default function PostApiComponent() {
  const [textValue, setTextValue] = useState("");
  const valueAdd =()=>{
    console.log(textValue);
  };

  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey",marginTop:1 }}>
      <TextField
        variant="outlined"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        label="Enter Text"
      />
      <Button
        variant="contained"
        sx={{ marginLeft: 2,marginTop: 1 }}
        onClick={valueAdd}
      >
        Add Text
      </Button>
    </Box>
  );
}
