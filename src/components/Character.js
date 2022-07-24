import React from 'react'

// Write your Character component here
const Character = (props, action) => {



    return (
        <div className="characters">
           {props.character.name} 
            <button onClick={() => action(props.character.data)}>
                {props.character.birth_year} 
            </button>
        </div>
    )
}

export default Character

// export default function Character({ props, action,}) {
//     return (
//       <div>
//         {props.character.name}
//         <button onClick={() => action(props.character.data)}>
//           See details
//         </button>
//       </div>
//     )
//   }