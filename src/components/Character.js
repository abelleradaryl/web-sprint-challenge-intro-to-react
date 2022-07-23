// Write your Character component here
const Character = (props) => {



    return (
        <div className="characters">
           {props.character.name} <button> {props.character.birth_year} </button>
        </div>
    )
}

export default Character