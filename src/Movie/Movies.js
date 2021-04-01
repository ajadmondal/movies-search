import React from 'react'
import './Movies.css';

export default function Movies(props) {
    const imageLink ="https://image.tmdb.org/t/p/w300"+props.poster;
    return (
        <div className="container">
            <div className="image">
                <img src = {imageLink} alt="poster"/>
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <p>{props.overview}</p>
                <p> Released on : {props.date}</p>
                <p> Popularity : {props.popularity}</p>
                <p> Rating : {props.rating}/10</p>
            </div>
        </div>
    )
}
