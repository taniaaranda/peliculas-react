import React, {useState} from "react";
import PropTypes from 'prop-types';

const Card = ({movie}) => {
    
    return (
        <div className="col-md-3">
            <div className="card" id={movie.id}>
                <img src={'http://image.tmdb.org/t/p/w185/'+movie.poster_path} alt={movie.original_title} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{movie.original_title}</h4>
                    <h6>{movie.overview}</h6>
                    <p>{`Popularidad: ${movie.popularity}`}</p>
                    <p>{`Estreno: ${movie.release_date}`}</p>
                </div>
            </div>
        </div>
    )
    
};

Card.propTypes={
    movie: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        popularity: PropTypes.number
    }).isRequired   
};

export default Card;