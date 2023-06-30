import { createContext } from "react";
const JokeContext = createContext({
    joke: "",
    fetchJoke: () => {}
});

export default JokeContext;