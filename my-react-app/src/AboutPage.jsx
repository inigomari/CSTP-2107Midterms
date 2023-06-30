import React from 'react';
import NavBar from './navbar.jsx';
import Footer from './footer.jsx';
import './css/AboutPage.css';
import chucknorris from './images/chucknorris.gif';

function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className='main-container'>
          <h1>Welcome to the Great Chuck Norris' Jokes</h1>
          <p>This website is dedicated for jokes about Chuck Norris</p>
          <p>Have fun and enjoy the jokes!</p>
          <div className='img-container'>
            <img src={chucknorris} alt="Chuck Norris" />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
 