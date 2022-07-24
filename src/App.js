import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import Details from "./components/Details";
import styled, { keyframes } from 'styled-components'

const StyledApp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    padding: 100px;
    margin: 5px;
    `



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
    <StyledApp className="App">
      <h1 className="Header">STAR WARS</h1>
      { apiError && <h2 className="error">{apiError}</h2>}

      {
      data.map((character) => {
        return <Character character={character} action={openDetails} key={character.name} /> 
      })

      }
      {
        currentPersonData && <Details person={currentPersonData} close={closeDetails}/>
      }
    </StyledApp>
  );
}
export default App;
/* https://swapi.dev/api/people/ */

// birth_year: "19BBY""
// eye_color: "blue"
// gender: "male"
// hair_color: "blond"
// height: "172"
// mass: "77"
// name: "Luke Skywalker"

// birthYear={character.birth_year}