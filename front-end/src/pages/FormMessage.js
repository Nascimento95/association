import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const FormMessage = () => {
    
    const navigate = useNavigate()    

    const formik = useFormik({
        initialValues: {
            association_concernée : "",
            message : "",
            date : "" , 
            nom : "" ,
        },
        onSubmit : values => {
            alert(JSON.stringify(values));
            fetch("http://localhost:5000/associations",{
                method: "post",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(values)
            })

             .then(response => response.json())
             .then(result => 
                console.log(result),
                navigate("/")
            )
             .catch(error => console.log('error', error));
        }
    })
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <form className='mt-5 ' onSubmit={formik.handleSubmit}>
                        <label>Nom de l'association :</label>   
                        <input 
                            className='mx-4'
                            id="association_concernée" 
                            name="association_concernée"
                            type="text" 
                            placeholder="association concernée"
                            onChange= {formik.handleChange}
                            value = {formik.values.association_concernée }
                        />
                        <label>votre message :</label>  
                        <input 
                        className='mx-4 mb-5'
                        id="message" 
                        name="message"
                        type="text" 
                        placeholder="entrez votre message"
                        onChange= {formik.handleChange}
                        value = {formik.values.message}
                        />
                        <label>date de l'envoie :</label>  
                        <input 
                            className='mx-4'
                            id="date" 
                            name="date"
                            type="date" 
                            placeholder="nom de l'association"
                            onChange= {formik.handleChange}
                            value = {formik.values.date }
                        />
                        <label>Nom de l'utilisateur :</label>  
                        <input 
                            className='mx-4'
                            id="nom" 
                            name="nom"
                            type="text" 
                            placeholder="nom de l'utilisateur"
                            onChange= {formik.handleChange}
                            value = {formik.values.nom}
                        />
                        <button type='submit'>Valider</button>
                    </form>
                </div>
            </div>
        </div>
       
    );
};

export default FormMessage;