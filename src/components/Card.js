import React from 'react'
import Ability from "./Ability"
import '../css/Card.css'

function Card({name, weight, base_experience, images, preview, showSelected}) {
  return (
    <div className={preview ? "preview" : "card"} onClick={() => showSelected(name)}>
      <header>
        <img src={images.front_default} alt={name}></img>
      </header>
      <h3>{name}</h3>
      <p>Weight: {weight}</p>
      <p>Base Experience: {base_experience}</p>
    </div>
  )
}

export default Card;