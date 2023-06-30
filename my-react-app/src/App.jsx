import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JokePage from './JokePage.jsx'
import Home from './Home.jsx'
import AboutPage from './AboutPage.jsx';
import axios from 'axios';
import { JokeProvider } from './context';
import { JokeContext } from './context';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  
  return (
    <JokeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joke" element={<JokePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
    </JokeProvider>

  );
}

export default App;
