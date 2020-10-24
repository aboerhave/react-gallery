import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {

    state = {
        pictureOn: true
    }

    imageToggle = (event) => {
        event.preventDefault();
        console.log('clicked');
        
    }

    render(){
        return (
            <div className="PictureDiv" >
                <img src={this.props.picture.path} 
                alt={this.props.picture.description} 
                width="200px"  onClick={this.imageToggle}
                />
            </div>
        )
    }
}

export default GalleryItem;