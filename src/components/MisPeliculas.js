import React, {Fragment} from 'react';
import Pelicula from '../components/Pelicula';
import {Container, Row} from 'react-bootstrap/'

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=aa3fe5ee';
const APIfirebase = 'todavianolatengo';

class MisPeliculas extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [],
            searchTerm:'',
            error:'',
            loading: true
        }
    }

    async componentDidMount(){
        const res =  await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        this.setState({data:resJSON.Search, loading: false})
    }

    async handleSubmit(e){
        e.preventDefault();
        if(!this.state.searchTerm){
            return this.setState({error:'Debe escribir un texto valido'})
        }
        const res = await fetch(`${API}&s=${this.state.searchTerm}`)
        const data = await res.json();
        if(!data.Search){
            return this.setState({error: 'No se encontaron resultados'})
        }
        this.setState({data: data.Search, error:'', searchTerm:''})
    }

    render(){
        const {data, loading} = this.state;
        if(loading){
            return <h3 className="text-light">Cargando</h3>        
        }
        return (
            <Fragment>
                <Container>
                    <Row style={{backgroundColor:'white'}}>
                        {
                            data.map((movie, i) => {
                                return <Pelicula movie={movie} key={i}/>
                            })
                        }
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default MisPeliculas;
