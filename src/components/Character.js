import React from 'react'
import styled, { keyframes } from 'styled-components'

// Write your Character component here
const kf = keyframes`
  20% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledCharacter = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center
    padding: 5px;
    margin: 5px;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.secondaryColor};

    @media ${pr => pr.theme.breakpointMobile} {
      width: 100%;
    }

    // transition: all .2s ease-in-out;
    // &:hover {
    //   background-color: ${pr => pr.theme.secondaryColor};
    //   color: ${pr => pr.theme.primaryColor};
    // }

    // &::before {
    //   content: "${pr => pr.besty ? '💚' : '😀'}";
    // }

    button {
      background-color: ${pr => pr.theme.tertiaryColor};
      &:hover {
        transform: scale(1.1);
      }
    }

    transform: scale(2);
    opacity: 0;
    animation: ${kf} 0.3s ease-in-out forwards;
`

  const Character = (props, action) => {
  
  
  
      return (
          <StyledCharacter className="characters-container">
             <h2>{props.character.name}</h2>
             <div className='p-container'>
                  <p> Birth Year: { props.character.birth_year} </p>
                  <p> Gender: { props.character.gender} </p>
                  <p> Height: { props.character.height} </p>
              </div>
              <button onClick={() => action(props.character.data)}>
                  More Details 
              </button>
          </StyledCharacter>
      )
  }

export default Character;

// export default function Character({ props, action,}) {
//     return (
//       <div>
//         {props.character.name}
//         <button const onClick={() => action(props.character.data)}>
//           See details
//         </button>
//       </div>
//     )
//   }