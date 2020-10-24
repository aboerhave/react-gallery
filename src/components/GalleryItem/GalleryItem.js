import React, { Component } from 'react';
import './GalleryItem.css';


class GalleryItem extends Component {

    state = {
        pictureOn: true
    }

    renderPictures = (picture) => {
        if(this.state.pictureOn){
        return (
            <div className="PictureDivOn" >
                <img src={picture.path} 
                alt={picture.description} 
                width="200px"  onClick={this.imageToggle}
                />
            </div>
            )
        }
        else {
            return (
                <div className="PictureDivOff" >
                    <img src={picture.path} 
                    alt={picture.description} 
                    width="200px"  onClick={this.imageToggle}
                    />
                </div>
            )
        }
    }

    imageToggle = (event) => {
        event.preventDefault();
        console.log('clicked', this.state.pictureOn);
        this.setState({
            pictureOn: !this.state.pictureOn
        })
    }

    render(){
        return (
            this.renderPictures(this.props.picture)
            // <div className="PictureDiv" >
            //     <img src={this.props.picture.path} 
            //     alt={this.props.picture.description} 
            //     width="200px"  onClick={this.imageToggle}
            //     />
            // </div>
        )
    }
}

export default GalleryItem;