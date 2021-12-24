import React from 'react';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Title = styled.div`
    text-align: center;
    margin-top: 50px;
`

const HomePage = () => {
    return (
        <div>   
            <Title>
                <h1>Crée votre liste des meilleurs associations</h1>
            </Title>
            <Nav />
        </div> 
        
    );
};

export default HomePage;