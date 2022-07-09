import '../css/App.css';
import React, { Component } from 'react'
import Deck from "./Deck"

class App extends Component  {
  constructor() {
    super()
    this.state = {
      poke: [],
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("App Mounted")
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
      })
      this.setState({isLoading: false})
    })
  };

  componentDidUpdate() {
    console.log("App Updated")
  }

  render() {
    return (
      <div className="App">
        <h2>My Deck</h2>
        {this.state.isLoading && <h3>Loading Cards</h3>}
        <Deck cards={this.state.poke} />
      </div>
    );
  }
}

export default App;
