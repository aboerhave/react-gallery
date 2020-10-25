import axios from 'axios';
import React, { Component } from 'react';
import './GalleryForm.css';


class GalleryForm extends Component {

state = {
    newPicture: {
        path: '',
        description: ''
    }
}

handleChange = (event, property) => {
    this.setState({
        newPicture: {
            ...this.state.newPicture,
            [property]: event.target.value
        }
    })
}

addPicture = (event) => {
    event.preventDefault();
    console.log('clicked', this.state.newPicture);
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
}

render() {
    return (
        <>
        <h3>Add a new image to the collection:</h3>
        <form onSubmit={this.addPicture}>
            <label htmlFor="pathBox">Path to Image:</label>
            <input type="text" placeholder="Path to Image" id="pathBox"
                onChange={(event) => this.handleChange(event, 'path')}
                value={this.state.newPicture.path} ref="path"/>
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