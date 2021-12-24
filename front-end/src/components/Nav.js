import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    font-weight: bold;
    background-color:grey;
    ul{
        display:flex;
        list-style-type: none;
        justify-content: end;
    }
    li{
        margin-left:20px;
        color:black;
    }
    a{
        text-decoration: none;
    }
`

const Nav = () => {
    return (
        <Container>
            <ul>
               <Link to="/"><li>Home-page</li></Link> 
               <Link to="/associations"><li>Liste des associations</li></Link> 
                <Link to="/associations/formulaire"><li>Envoyer un Commentaire</li></Link>
                <Link to="/admin"><li>Les Commentaires</li></Link>
            </ul>
        </Container>
    );
};

export default Nav;