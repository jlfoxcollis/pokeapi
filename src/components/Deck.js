import React from 'react'
import Card from './Card'
import '../css/Deck.css'

function Deck(props) {

  const cards = props.cards.map(card => {
    return ( <Card
      attributes={card}
      name={card.name}
      images={card.sprites}
      weight={card.weight}
      base_experience={card.base_experience}
      preview={props.preview}
      showSelected={props.showSelected}
      key={card.name}
      />
    )
  })

  return (
    <div className="Deck">
      {cards}
    </div>
  )
}

export default Deck;