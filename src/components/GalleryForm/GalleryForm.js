import React, { Component } from 'react';


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
}

render() {
    return (
        <>
        <h3>Add a new image to the collection:</h3>
        <form onSubmit={this.addPicture}>
            <label htmlFor="pathBox">Path to Image</label>
            <input type="text" placeholder="Path to Image" id="pathBox"
                onChange={(event) => this.handleChange(event, 'path')}
                value={this.state.newPicture.path}/>
            <label htmlFor="descriptionBox">Decription of Image</label>
            <input type="text" placeholder="Description of Image" id="descriptionBox"
                onChange={(event) => this.handleChange(event, 'description')}
                value={this.state.newPicture.description} maxLength="200"/>
            <button>Submit New Picture</button>
        </form>
        </>
        )
    }
}

export default GalleryForm;