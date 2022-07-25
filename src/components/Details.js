import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character"
import styled, { keyframes } from 'styled-components'


const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;

  background-color: ${props => props.theme.primaryColor};
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.secondaryColor};
  }

  button {
    background-color: ${pr => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(1.1);
      color: red;
    }
`

export default function Details(props) {
    const { person, close } = props
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
        .then(resp => {
        //   console.log(resp);
          setDetails(resp.data)
        })
        .catch(error => { console.error(error) })
    }, [person])

    return (
      <StyledDetails className='details-container'>
        <h1>Films:</h1>
        {details &&
        <>
          {/* .map */}
        </>
        }
        <button onClick={close}>Exit</button>
      </StyledDetails>
    )
  } 