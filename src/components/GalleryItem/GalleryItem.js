import React, { Component } from 'react';


class GalleryItem extends Component {
    render(){
        return (
                <img src={this.props.picture.path} alt={this.props.picture.description} width="500px" />
        )
    }
}

export default GalleryItem;