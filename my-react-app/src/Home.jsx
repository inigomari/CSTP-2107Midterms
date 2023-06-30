import React, { useEffect, useState } from 'react';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import './css/Home.css';
import chuck from './images/chuckthumbsupjpg.jpg';
import axios from 'axios';
import { JokeContext } from './context';



function HomePage() {

  return (
    <div>
      <NavBar />
      <div className='home-container'>

        <h1>Welcome to The Great Chuck Norris Jokes!</h1>
        <h2>“Jack was nimble, Jack was quick, but Jack still couldn't dodge Chuck Norris' roundhouse kick.”</h2>
        <h3>-Chuck Norris</h3>
        <div className='img-container'>
          <img src={chuck} alt="Chuck Norris" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
