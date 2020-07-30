import React, {Fragment} from 'react';
import Pelicula from '../components/Pelicula';
import {Container, Row, Alert} from 'react-bootstrap/';
import  {db} from '../firebase';
import { array } from 'prop-types';

const APIfirebase = 'https://peliculas-react.firebaseio.com/movies/movies.json';

class MisPeliculas extends React.Component{

    constructor(){
        super();
        this.state = {
            data: [],
            searchTerm:'',
            error:'',
            loading: true,
            hayPelis: false
        }
        this.handler = this.handler.bind(this)
    }

    async componentDidMount(){
        const res =  await fetch(`${APIfirebase}`)
        const resJSON = await res.json()
        var arr = []
        if (resJSON){
            Object.keys(resJSON).forEach(function(key) {
                var movie = resJSON[key];
                movie['id'] = key;
                arr.push(movie);
            });
            this.setState({data:arr, loading: false})
            this.setState({hayPelis:true})
        }
        else{
            this.setState({data:arr, loading: false})
        }
        
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

    handler(index) {
        const {data} = this.state;
        data.splice(index, 1);
        console.log(data)
        if (data.length=== 0){
            this.setState({hayPelis:false})
        }
        this.setState({data:data})
    }

    render(){
        const {data, loading} = this.state;
    
        if(loading){
            return <h3 className="text-light">Cargando</h3>        
        }
        else{
            if (!this.state.hayPelis){
                return (
                    <Alert key="warning" variant="warning">
                        No hay mas peliculas!
                    </Alert>
                )
            }
            else{
                return (
                    <Fragment>
                        <Container>
                            <Row style={{backgroundColor:'white'}}>
                                {
                                    data.map((movie, i) => {
                                        return <Pelicula movie={movie} index={i} key={i} handler={this.handler}/>
                                    })
                                }
                            </Row>
                        </Container>
                    </Fragment>
                )
            }
        }
    }
}

export default MisPeliculas;
