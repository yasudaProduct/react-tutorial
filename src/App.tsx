import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const text: string = 'Hello World';

  return (
    <div className="App">
      <h1>{text}</h1>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
