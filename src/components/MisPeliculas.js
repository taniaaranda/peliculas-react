import React, {Fragment} from 'react';
import Pelicula from '../components/Pelicula';
import {Container, Row} from 'react-bootstrap/';
import  {db} from '../firebase';

const API = 'https://www.omdbapi.com/?apikey=aa3fe5ee';
const APIfirebase = 'https://firestore.googleapis.com/v1/projects/peliculas-react/databases/(default)/documents/movies/';


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
        const res =  await fetch(`${APIfirebase}`)
        const resJSON = await res.json()
        resJSON.documents.map((movie, i) => {
            console.log(movie.fields.Title)
            this.setState({data:movie, loading: false})
        })
        

        //this.setState({data:resJSON.Search, loading: false})
        
        /*
        db.collection("movies")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data); // array of cities objects
        this.setState({data:data, loading: false})
        });
        */
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
