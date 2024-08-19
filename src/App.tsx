import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, createTheme, CssBaseline, makeStyles, ThemeProvider } from '@mui/material';
import Header from './components/Header';

function App() {
  const text: string = 'Hello World';

  return (
    <div className="App">
      <Header />
      <h1>{text}</h1>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}

export default App;
