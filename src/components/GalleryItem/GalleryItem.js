// This is the GalleryItem.js file for the Week 10 assignment for Prime Digital Academy, created by Adam Boerhave, 
// 10/22/1010 - 10/25/2020

import React, { Component } from 'react';
import axios from 'axios';
import './GalleryItem.css';

class GalleryItem extends Component {

    // initial state
    state = {
        pictureOn: true
    }

    // renderPictures function goes through and selects what should be rendered for the elememts
    // based on the pictureOn state and the number of likes the picture has
    renderPictures = (picture) => {
        // if the pictureON state true
        if(this.state.pictureOn){   
        return (
            <div className="PictureDivOn" >
                <img src={picture.path} 
                alt={picture.description} 
                width="225px"  onClick={this.imageToggle}
                />
                <br></br>
                <button className="likeBtn" onClick={() => this.addLike(picture.id)}>Click to Like Picture</button>
                {picture.likes === 0 && 
                    <p>Nobody likes this picture yet.</p>
                }
                {picture.likes === 1 && 
                    <p>One person likes this picture!</p>
                }
                {picture.likes > 1 && 
                    <p>{picture.likes} people like this picture!</p>
                }
                <button onClick={() => this.deletePicture(picture.id)} className="deleteBtn" >X</button>
            </div>
            )
        }
        // if the pictureOn state fale\se
        else {
            return (
                <div className="PictureDivOff" >
                    <img src={picture.path} 
                    alt={picture.description} 
                    width="225px"  onClick={this.imageToggle}
                    />
                    <div className="textClass" onClick={this.imageToggle}>
                        <p className="ImageText">{picture.description}</p>
                    </div>
                    <br></br>
                    <button className="likeBtn"onClick={() => this.addLike(picture.id)}>Click to Like Picture</button>
                    {picture.likes === 0 && 
                    <p>Nobody likes this picture yet.</p>
                    }
                    {picture.likes === 1 && 
                    <p>One person likes this picture!</p>
                    }
                    {picture.likes > 1 && 
                    <p>{picture.likes} people like this picture!</p>
                    }
                    <button onClick={() => this.deletePicture(picture.id)} className="deleteBtn" >X</button>
                </div>
            )
        }
    }

    // imageToggle function changes state to opposite so it turns off or on
    imageToggle = (event) => {
        event.preventDefault();
        this.setState({
            pictureOn: !this.state.pictureOn
        });
    }

    // add "like" to picture data in database when button is clicked
    addLike = (pictureId) => {
        // event.preventDefault();
        console.log('button clicked', pictureId);
        axios({
            method: 'put',
            url: `gallery/like/${pictureId}`
        }).then((response) => {
            console.log('response', response);
            this.props.getPictures();
        }).catch((error) => {
            console.log('error', error);
            alert('There was a problem.  Try again later');
        })
    }

    // deletePicture for deleting entire picture with data from db after the red x button is clicked
    deletePicture = (pictureId) => {
        console.log('delete button clicked', pictureId);
        axios({
            method: 'DELETE',
            url: `gallery/${pictureId}`
        }).then((response) => {
            console.log('response', response);
            this.props.getPictures();            
        }).catch((error) => {
            console.log('error', error);
            alert('There was a problem.  Try again later');
        });
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