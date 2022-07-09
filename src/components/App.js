import '../css/App.css';
import React, { Component } from 'react'
import Deck from "./Deck"
import Card from "./Card"

class App extends Component  {
  constructor() {
    super()
    this.state = {
      poke: [],
      isLoading: true,
      showSelected: false,
      selected: ""
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=10')
      .then(response => response.json())
      .then(data => {
        let results = data.results;
        results.map(async result => {
          const response = await fetch(result.url);
          const pokemon = await response.json();
          this.setState((prevState) => {
            return { poke: prevState.poke.concat([pokemon]) }
          });
      });
      this.setState({isLoading: false})
    });
  };

  showSelected = (name) => {
    if(this.state.showSelected) {
      return this.setState({showSelected: false})
    } else {
      const selectedPokemon = this.state.poke.find(pokemon => pokemon.name === name);
      this.setState({showSelected: true, selected: selectedPokemon})
    }
  }

  render() {
    return (
      <div className="App">
        <h2>My Deck</h2>
        {this.state.isLoading && <h3>Loading Cards</h3>}
        {this.state.showSelected ? 
          <Card 
            name={this.state.selected.name}
            images={this.state.selected.sprites}
            weight={this.state.selected.weight}
            base_experience={this.state.selected.base_experience}
            showSelected={this.showSelected}
            preview={this.state.showSelected}
          /> : 
          <Deck
            showSelected={this.showSelected}
            preview={this.state.showSelected}
            cards={this.state.poke} 
          />
        }
      </div>
    );
  }
}

export default App;
