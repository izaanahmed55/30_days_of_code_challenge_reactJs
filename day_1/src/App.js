import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { DarkMode } from './components/DarkMode';

function App() {
  return(
    <>
      <NavBar />
      <DarkMode />
    </>
  )
}

export default App;
