import React from "react";
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap/'


function handleClick(e) {
    const requestOptions = {
        method: 'DELETE'
      };
      fetch("https://tp3appweb.firebaseio.com/nada.json", requestOptions).then((response) => {
        return response.json();
      }).then((result) => {
        alert("borrado")
      });
}


const Pelicula = ({movie}) => {
    console.log({movie})
    return (
        <div>
            <div className="col-md-2 offset-md-2">
                <Card 
                    style={{ width: '13em' }} 
                    bg={'warning'}
                    text={'warning' === 'light' ? 'dark' : 'white'}
                    >
                    <Card.Img variant="top" src={movie.Poster}/>
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{`${movie.Type}`} | {`Año: ${movie.Year}`} </Card.Subtitle>
                        <Card.Text>
                     
                        </Card.Text>
                        <button type="button" className="btn btn-outline-danger" onClick={(e) =>handleClick(e)}>Eliminar de mi lista</button>
                    </Card.Body>
                </Card>
            </div>
        </div>   
    )
};

Pelicula.propTypes={
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string
    }).isRequired   
};

export default Pelicula;