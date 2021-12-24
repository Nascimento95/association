import React, { useEffect, useState  } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav'
import styled from 'styled-components';

const Img = styled.img`
    width : 100%;
    height : 400px;
`

const AssociationSelected = () => {
    const { name } = useParams()

    const [association , setAssociation ] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/associations/${name}`)
         .then(response => response.json())
         .then(data => setAssociation(data))
    },[])

    if(!association){
        return <p>Chargement ...</p>
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center'>votre association sélectionner</h1>
                    <Nav />
                    <div className='row mt-5'>
                        <div className='col'>
                            <div>
                                <Img className='img-fluid' src={association.image} alt="ok" />
                                <p className='mt-5 fst-italic'> {association.description} </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default AssociationSelected;