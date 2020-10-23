import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {
    render(){
        return (
            <div className="PictureDiv">
                <img src={this.props.picture.path} alt={this.props.picture.description} width="200px" />
            </div>
        )
    }
}

export default GalleryItem;