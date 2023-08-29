import React from 'react';
// import { useState } from 'react';
import './index.css';
import './App.css';
import Navbar from './Navbar_components/Navbar';
// import Sidebar from './Navbar_components/Sidebar';
// import { Container, Grid } from '@mui/material';

function App() {
  const textStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
  };
  return (
    <div style={textStyle}>
      <div className='main'>
        <Navbar />
      </div>
    </div>
  );
}
export default App;
