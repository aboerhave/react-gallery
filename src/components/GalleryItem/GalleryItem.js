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
                <br></br>
                <button onClick={this.addLike}>click to like</button>
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
                    <div className="textClass" onClick={this.imageToggle}>
                        <p>{picture.description}</p>
                    </div>
                    <br></br>
                    <button onClick={this.addLike}>click to like</button>
                </div>
            )
        }
    }

    imageToggle = (event) => {
        event.preventDefault();
        console.log(' picture clicked', this.state.pictureOn);
        this.setState({
            pictureOn: !this.state.pictureOn
        })
    }

    addLike = (event) => {
        event.preventDefault();
        console.log('button clicked');
        
    }

    render(){
        return (
            // this line calls the renderPictures function above to
            // perform the conditional rendering
            this.renderPictures(this.props.picture)
        )
    }
}

export default GalleryItem;