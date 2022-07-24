import React, { useState, useEffect } from "react";
import {Button} from "reactstrap";
import axios from "axios";


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
        <h2>About:</h2>
        {details &&
        <>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.birth_year}</p>
        </>
        }
        <Button onClick={close}>Exit</Button>
      </div>
    )
  }