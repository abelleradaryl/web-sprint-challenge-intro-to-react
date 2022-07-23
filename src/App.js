import React, { useState, useEffect } from 'react';
import axios from "axios";

import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [ data, setData ] = useState([]);
  const [currentPersonData, setCurrentPersonData] = useState("1");
  const [ apiError, setApiError ] = useState(null)

  const openDetails = id => {
    setCurrentPersonData(id)
  }

  const closeDetails = () => {
    setCurrentPersonData(null)
  }

  useEffect(() => {
    console.log("We're Working");
  }, [])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(resp => {
      console.log(resp);
      setData(resp.data)
    })
    .catch(err => setApiError("Oops, We'll be back soon!!"));
  }, [])



  return (
    <div className="App">
      { apiError && <h2 className="error">{apiError}</h2>}
      <h1 className="Header">Characters</h1>
      {
      
      data.map((character) => {
        return <Character character={character} openDetails={openDetails} key={character.name} /> 
      })
      
      }
    </div>
  );
}

export default App;
/* https://swapi.dev/api/people/ */