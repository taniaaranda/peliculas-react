import React from "react";
import PropTypes from 'prop-types';



function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    alert("holaa")
}


const Card = ({movie}) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{movie.Title}{movie.Year}</h4>
                    <p>{`Type: ${movie.Type}`}</p>
                    <button type="button" className="btn btn-outline-success" onClick={(e) =>handleClick(e)}>Guardar</button>
                </div>
            </div>
        </div>
    )
};

Card.propTypes={
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string
    }).isRequired   
};

export default Card;