import React, { Component } from 'react';


class GalleryList extends Component {
    render() {
        return (
            <>
            {this.props.pictureArray.map((picture) => {
                return <img src={picture.path} alt={picture.description} />
            })}
            </>
        )
    }
}

export default GalleryList;