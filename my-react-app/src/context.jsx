import React, { createContext, useState } from 'react';
import axios from 'axios';
export const JokeContext = createContext();


export function JokeProvider({ children }) {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
      console.log(response.data.value)
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    joke,
    fetchJoke,
  };
// console.log(value)
  return (
    <JokeContext.Provider value={value}>
      {children}
    </JokeContext.Provider>
  );
}
