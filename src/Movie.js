import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{
    static protoTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.string.isRequired,
        synopsis: PropTypes.string.isRequired
    }

    render(){
        console.log(this.props);
        return(
        <div className="Movie">
            <div className="Movie_Columns">
            <div className="Movie_Poster">
            <MoviePoster poster ={this.props.poster} />
            </div>
            </div>
            <div className="Movie_Columns">
                <h1>title</h1>
                <div className="Movie_Genres">
                   <span> {this.props.genres} </span>
                </div>
                <div className="Movie_Synop">
                    <p>{this.props.synopsis}</p>
                </div>
            </div>
          
        </div>
        
        )}

}

class MoviePoster extends Component{
    static PropTypes={
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}


export default Movie