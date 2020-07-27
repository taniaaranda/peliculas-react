import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FaCartPlus, FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom'

class Barra extends React.Component{

    render(){
        return(
            <Navbar style={{position: "sticky", top: 0}} expand="lg" variant="light" bg="light" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/mis_peliculas">Peliculas guardadas</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}
export default Barra