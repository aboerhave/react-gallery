import React, { Component } from 'react';
import axios from 'axios';
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
                width="225px"  onClick={this.imageToggle}
                />
                <br></br>
                <button className="likeBtn" onClick={() => this.addLike(picture.id)}>Click to Like Picture</button>
                {picture.likes === 0 && 
                    <p>
                        Nobody likes this picture yet.
                    </p>
                }
                {picture.likes === 1 && 
                    <p>
                        One person likes this picture!
                    </p>
                }
                {picture.likes > 1 && 
                    <p>
                        {picture.likes} people like this picture!
                    </p>
                }
                <button onClick={() => this.deletePicture(picture.id)} className="deleteBtn" >X</button>
            </div>
            )
        }
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
                    <button onClick={() => this.addLike(picture.id)}>Click to Like Picture</button>
                    {picture.likes === 0 && 
                    <p>
                        Nobody likes this picture yet.
                    </p>
                    }
                    {picture.likes === 1 && 
                    <p>
                        One person likes this picture!
                    </p>
                    }
                    {picture.likes > 1 && 
                    <p>
                        {picture.likes} people like this picture!
                    </p>
                    }
                    <button onClick={() => this.deletePicture(picture.id)} className="deleteBtn" >X</button>
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

    // add "like" when button is clicked
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

    deletePicture = (pictureId) => {
        console.log('delete button clicked', pictureId);
        
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