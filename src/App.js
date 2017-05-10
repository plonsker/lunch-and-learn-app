import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      inventory: {}
    }
  }

  componentWillMount() {
    fetch('http://localhost:4000/db')
      .then(response => {
        return response.json();
      })
      .then(responsJson => {
        console.log(responsJson);
        this.setState({
          inventory: responsJson.inventory
        })
      });
  }

  renderInventoryWhenReady(){
    if (this.state.inventory.kind_bars){
      return (
        <div className="inventory-container">
        <h3 className>
          {this.state.inventory.kind_bars.name}
        </h3>

        <p className="item-description">
        {this.state.inventory.kind_bars.description}
        </p>

        <p className="item-description">
        {this.state.inventory.kind_bars.votes}
        </p>
      </div>
    );
  } else {
    return (
      <p className="loading-indicator"> Loading </p>
    );
  }
}

  render() {
    return (
      <div className="App">
        <div className="App-header">


        <h2> Inventory</h2>
        </div>
        {this.renderInventoryWhenReady()}
      </div>

    );
  }
}

export default App;
