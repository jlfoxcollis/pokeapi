import React from 'react'
import '../css/Card.css'

function Card(props) {
  return (
    <div>
      <h3>{props.data.name}</h3>
    </div>
  )
}

export default Card;