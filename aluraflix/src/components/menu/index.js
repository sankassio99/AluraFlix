import React from 'react';
import { Link } from 'react-router-dom';
import  './Menu.css' ;
// import ButtonLink from '../button/index';
import Button from '../button/Button'
import Logo from '../../asserts/logo.png';


function Menu() { 
    return (
        <nav className="Menu">
            <Link to="/">
                <img  className="logo" src={Logo} alt="Logo" />       
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav> 
    );
}

export default Menu ;