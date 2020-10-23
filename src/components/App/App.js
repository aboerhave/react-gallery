import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
