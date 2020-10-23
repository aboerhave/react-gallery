import axios from 'axios';
import React, { Component } from 'react';
import Header from '../Header/Header'
import './App.css';

class App extends Component {

  state = {
    pictureArray: []
  }

  componentDidMount = () => {
    console.log('app.js mounted');
    this.getPictures();
  }

  // need GET request
  getPictures = () => {
    console.log('in getPictures');
    
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('response', response.data);
      this.setState({
        pictureArray: response.data
      }).catch((error) => {
        console.log('error', error);
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        {this.state.pictureArray.map((picture) => {
          return <li> {picture.description}</li>
        })}
      </div>
    );
  }
}

export default App;
