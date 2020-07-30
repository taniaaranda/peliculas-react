import React, {useState} from "react";
import PropTypes from 'prop-types';
import  {db} from '../../firebase'
import '../../firebase';


const Card = ({movie}) => {
    const [show, setShow]=useState(true);
    const [showmsg, setShowmsg]=useState(false);

    const handleClick = (e,movie)=>{
        e.preventDefault();
        getFromFirebase(movie);
    }
    
    const addToFirebase = async(movie)=>{
        //await db.collection('movies').doc().set(movie);
        //console.log("Pelicula Agregada");
        
        var url = 'https://peliculas-react.firebaseio.com/movies/movies.json';
        var data = movie;
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        
        setShow(!show);    
    }

    const getFromFirebase = async(movie)=>{
        var agregada = false;
        /*db.collection("movies").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(movie.imdbID === doc.data().imdbID){
                    agregada = true;
                }
            });
        });*/
       
        const res =  await fetch(`https://peliculas-react.firebaseio.com/movies.json`);
        const resJSON = await res.json();
        var arr = [];
        if (resJSON){
            Object.keys(resJSON.movies).forEach(function(key) {
                arr.push(resJSON.movies[key]);
                if(resJSON.movies[key].imdbID === movie.imdbID){
                    agregada = true;
                }
            });
        }
        if(!agregada){
            addToFirebase(movie);
        }else{
            setShow('');
            setShowmsg(!showmsg);
            //alert("La pelicula ya esta en su lista");
        }
    }
    

    return (
        <div className="col-md-4">
            <div className="card" id={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{movie.Title}{movie.Year}</h4>
                    <p>{`Type: ${movie.Type}`}</p>
                    {show? (
                        <button type="button" className="btn btn-outline-success" onClick={(e) =>{handleClick(e, movie);}}>Agregar a Lista</button>
                    ) : (show===false?(
                        <div className="alert alert-dismissible alert-success">
                        <button type="button" className="close" data-dismiss="alert" onClick={(e) =>{setShow('');}}>&times;</button>
                        <strong>Agregada!</strong> Puede encontrar la pelicula en su lista.
                        </div>
                    ) : ''
                    )}
                    {showmsg ? (
                        <div className="alert alert-dismissible alert-light">
                        <button type="button" className="close" data-dismiss="alert" onClick={(e) =>{setShowmsg(!showmsg);}}>&times;</button>
                        <strong>Ups!</strong> Pelicula anteriormente agregada, la encontrara en su lista.
                        </div>
                    )
                    : ''
                    }
                    
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