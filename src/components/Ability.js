import React from 'react'
import '../css/Deck.css'

function Ability(props) {
  return (
    <div className="Ability">
      <p>{props.ability.name}</p>
    </div>
  )
}

export default Ability;