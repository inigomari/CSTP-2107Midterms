import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NavBar from './navbar';
import Footer from './footer';
import { JokeContext } from './context';
import './css/JokePage.css';

function JokePage() {
  const { joke, fetchJoke } = useContext(JokeContext);

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <NavBar />
        <div className='main-container'>
          <h1>Chuck Norris</h1>
          <h2>Warning! Some jokes might contain explicit words. You have been warned!</h2>
          <p>{joke}</p>
          <button onClick={fetchJoke}>Show me a Joke</button>
        </div>
      <Footer /> 
    </div>
  );
}


export default JokePage;
