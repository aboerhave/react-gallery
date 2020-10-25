// This is the GalleryForm file for the Week 10 assignment for Prime Digital Academy, created by Adam Boerhave, 
// 10/22/1010 - 10/25/2020

import axios from 'axios';
import React, { Component } from 'react';
import './GalleryForm.css';


class GalleryForm extends Component {

// empty state created
state = {
    newPicture: {
        path: '',
        description: ''
    }
}

// handleChange function for form input
handleChange = (event, property) => {
    this.setState({
        newPicture: {
            ...this.state.newPicture,
            [property]: event.target.value
        }
    });
}

// addPicture function handles axios request to post picture data to database
addPicture = (event) => {
    event.preventDefault(); // no page refresh
    // checks to make sure something in the box
    if (!this.state.newPicture.path || !this.state.newPicture.description) {
        alert('Please make sure you fill in all of the information');
        return;
    }

    axios({
        method: 'POST',
        url: '/gallery',
        data: this.state.newPicture
    }).then((response) => {
        console.log('response', response);
        this.props.getPictures();      
        this.setState({
            newPicture: {
                path: '',
                description: ''
            }
        });  
        this.refs.path.value="";
        this.refs.desc.value="";
    }).catch((error) => {
        console.log('error', error);
    });
}   // end addPicture fn

render() {
    return (
        <>
        <h3>Add a new image to the collection:</h3>
        {/* form handles all the inputs on the button click */}
        <form onSubmit={this.addPicture}>
            {/* PATH */}
            <label htmlFor="pathBox">Path to Image:</label>
            <input type="text" placeholder="Path to Image" id="pathBox"
                onChange={(event) => this.handleChange(event, 'path')}
                value={this.state.newPicture.path} ref="path" autoFocus/>

            {/* DESCRIPTION */}
            <label htmlFor="descriptionBox">Description of Image:</label>
            <input type="text" placeholder="Description of Image" id="descriptionBox"
                onChange={(event) => this.handleChange(event, 'description')}
                value={this.state.newPicture.description} maxLength="75" ref="desc"/>
            <button>Submit New Picture</button>
        </form>
        </>
        )
    }
}

export default GalleryForm;