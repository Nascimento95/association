import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css'
const Title = styled.div`
    text-align: center;
`

const ListeAssociation = () => {

    const [associations, setAssociations] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/associations`)
         .then(response => response.json())
         .then(data => setAssociations(data))
    },[])

    return (
        <Title>
            <h1>la liste de vos associations</h1>
            <Nav />
            <div className='container'>
                <div className='row mt-5'>
                    {associations.map(association => 
                            <div key={association.name} className='col'>
                                <div className="card col-6" style={{width:"18rem"}}>
                                    <img src={association.image} className="card-img-top" alt={association.name} />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">{association.name}</h5> */}
                                        {/* <p className="card-text"> <span className="fw-bold">Description : </span>{association.description} </p> */}
                                        <p className="card-text"> <span className="fw-bold"></span>{association.slogan} </p>
                                        <Link to={`/associations/${association.name}`} className="btn btn-primary">Voir plus</Link>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </Title>
    );
};

export default ListeAssociation;