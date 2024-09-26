import React from 'react';
import Button from '@mui/material/Button';

export default function FirstComponent() {
  return (
    <div>
      <Button style={{ backgroundColor: '#A594F9', color: 'white', fontWeight: 'bold' }}>Click me</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}
