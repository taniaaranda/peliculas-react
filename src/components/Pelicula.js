import React from "react";
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap/'

const URLDELETE  = 'https://peliculas-react.firebaseio.com/movies/movies/';

class Pelicula extends React.Component{

    constructor(){
        super();
        this.state = {
            render: true
        }
    }

    handleClick(e, movie,i) {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch(URLDELETE+movie.id+'.json', requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            console.log("pelicula borrada")
        });
        this.setState({render:false})
        this.props.handler(i)
    }



    render(){
        const movie = this.props.movie
        const index = this.props.index
        if (this.state.render){
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
                                <button type="button" className="btn btn-outline-danger" onClick={(e) =>this.handleClick(e, movie, index)}>Eliminar de mi lista</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>   
            )
        }
        else{
            return null
        }
    };

}
export default Pelicula;