// This is the App.js file for the Week 10 assignment for Prime Digital Academy, created by Adam Boerhave, 
// 10/22/1010 - 10/25/2020

import axios from 'axios';
import React, { Component } from 'react';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import './App.css';

class App extends Component {

  state = {
    pictureArray: []
  }

  // function for page load
  componentDidMount = () => {
    console.log('app.js mounted');
    this.getPictures(); // calls get request right away
  }

  // GET request function to get all stored pictures
  getPictures = () => {
    console.log('in getPictures');
    
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('response', response.data);
      this.setState({
        pictureArray: response.data
      })
    }).catch((error) => {
      console.log('error', error);
      alert('There was an error.  Try again later.');
    });
  }

  render() {
    return (
      <div className="App">
        <Header />  
        <br/>
        {/* GalleryForm component with getPictures get request function sent down as prop */}
        <GalleryForm getPictures={this.getPictures}/>
        {/* GalleryList component with getPictures function and pictureArray sent down as props */}
        <GalleryList pictureArray={this.state.pictureArray} getPictures={this.getPictures}/>
      </div>
    );
  }
}

export default App;
