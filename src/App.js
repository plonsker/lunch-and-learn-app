import React, { Component, PropTypes } from 'react';
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import InventoryList from './InventoryList/InventoryList'
import ItemDetail from './ItemDetail/ItemDetail'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      inventory: {}
    };
  }

  componentWillMount() {
    fetch('http://localhost:4000/db')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          inventory: responseJson.inventory,
          fetching: false
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  renderInventoryWhenReady() {
    if (this.state.fetching){
      return (
      <p>Loading...</p>
    );
  }

  return (
    <InventoryList items={this.state.inventory}/>
  )


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inventory</h2>
        </div>
        {this.renderInventoryWhenReady()}
        <ItemDetail
        name="This is a test."
        description="The most delicious snack."
        votes={0}/>
      </div>
    );
  }
}

export default App;
//line from when i pushed again
