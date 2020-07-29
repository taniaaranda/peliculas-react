import React from "react";
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap/'

const URLDELETE = "https://firestore.googleapis.com/v1/projects/peliculas-react/databases/(default)/documents/movies/";

function handleClick(e) {
    const requestOptions = {
        method: 'DELETE'
      };
      fetch(URLDELETE, requestOptions).then((response) => {
        return response.json();
      }).then((result) => {
        alert("borrado")
      });
}



const Pelicula = ({movie}) => {
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