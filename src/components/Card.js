import React from 'react'
import Ability from "./Ability"
import '../css/Card.css'

function Card(props) {
  const getAbilities = () => {
    const abilities = props.abilities.map((ability) => {
      return ( 
        <Ability key={ability.ability.name} ability={ability} />
      )
    })
    return abilities
  }
  return (
    <div className={props.preview ? "preview" : "card"} onClick={() => props.showSelected(props.data.name)}>
      <header>
        <img src={props.data.sprites.front_default} alt={props.data.name}></img>
      </header>
      <h3>{props.data.name}</h3>
      <p>Weight: {props.data.weight}</p>
      <p>Base Experience: {props.data.base_experience}</p>
      {props.preview && getAbilities}
    </div>
  )
}

export default Card;