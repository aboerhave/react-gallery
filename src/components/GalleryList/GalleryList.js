import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
            {this.props.pictureArray.map((picture) => {
                return <GalleryItem picture={picture} key={picture.id} getPictures={this.props.getPictures}/>
            })}
            </>
        )
    }
}

export default GalleryList;