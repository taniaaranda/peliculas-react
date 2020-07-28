import React, {useState} from "react";
import PropTypes from 'prop-types';
import  {db} from '../../firebase'



const Card = ({movie}) => {
    const [show, setShow] = useState(true);

    const handleClick = (e,movie)=>{
        e.preventDefault();
        addToFirebase(movie);
    }
    
    const addToFirebase = async(movie)=>{
        await db.collection('movies').doc().set(movie);
        console.log("Pelicula Agregada");
    }

    const getFromFirebase = (movie)=>{
        db.collection("movies").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(movie.imdbID === doc.data().imdbID){
                    setShow(!show);
                }
            });
        });
    }

    return (
        <div className="col-md-4">
            <div className="card" id={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{movie.Title}{movie.Year}</h4>
                    <p>{`Type: ${movie.Type}`}</p>
                    {show? (
                        <button type="button" className="btn btn-outline-success" onClick={(e) =>{handleClick(e, movie); setShow(!show);}}>Agregar a Lista</button>
                    ) : (show===false?(<p className="text-success">Pelicula en Lista</p>) : ''
                    )}
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