import React, { Component } from 'react';


class GalleryForm extends Component {

state = {
    newPicture: {
        path: '',
        desctiption: ''
    }
}

addPicture = (event) => {
    event.preventDefault();
    console.log('clicked');
    
}

render() {
    return (
        <>
        <h3>Add a new image to the collection:</h3>
        <form onSubmit={this.addPicture}>
            <label htmlFor="pathBox">Path to Image</label>
            <input type="text" placeholder="Path to Image" id="pathBox"
            /*onChange={(event) => this.state.handleChange(event, 'path')} */
             />
            <button>Submit</button>
        </form>
        </>
        )
    }
}

export default GalleryForm;