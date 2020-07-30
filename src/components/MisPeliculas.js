import React, {Fragment} from 'react';
import Pelicula from '../components/Pelicula';
import {Container, Row} from 'react-bootstrap/';
import  {db} from '../firebase';

const API = 'https://www.omdbapi.com/?apikey=aa3fe5ee';
const APIfirebase = 'https://peliculas-react.firebaseio.com/movies/movies.json';


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
        var arr = []
        Object.keys(resJSON).forEach(function(key) {
            var movie = resJSON[key];
            movie['id'] = key;
            arr.push(movie);
        });
        this.setState({data:arr, loading: false})

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
