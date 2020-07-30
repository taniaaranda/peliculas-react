import React from "react";
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'react-bootstrap/'

const URLDELETE  = 'https://peliculas-react.firebaseio.com/movies/movies/';

class Pelicula extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [],
            searchTerm:'',
            error:'',
            loading: true,
            render: true
        }
    }

    handleClick(e, movie) {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch(URLDELETE+movie.id+'.json', requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            console.log("pelicula borrada")
        });
        this.setState({render:false})
    }



    render(){
        const movie = this.props.movie
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
                                <button type="button" className="btn btn-outline-danger" onClick={(e) =>this.handleClick(e, movie)}>Eliminar de mi lista</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>   
            )
        }
        else{
            if (this.state.data.lenght == 0){
                alert("no hay mas pelis")
                return null
            }
            else{
                return null
            }
        }
    };

}
export default Pelicula;