import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character"


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
      <div className='details-container'>
        <h2>Films:</h2>
        {details &&
        <>
          {/* .map */}
        </>
        }
        <button onClick={close}>Exit</button>
      </div>
    )
  } 