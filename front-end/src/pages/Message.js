import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';

const Message = () => {
    const [messages , setMessages] = useState([])
    const [search , setSearch] = useState("")
    const [date , setDate] = useState(false)

    useEffect (() => {
        fetch(`http://localhost:5000/associations/unicef/messages`)
         .then(response => response.json())
         .then(data => setMessages(data))
    },[])

    const handleSearch = (e) => {
        // console.log(e.target.value);
        let value =e.target.value 
        setSearch(value)
    }
    const checkDate = () => {
        let newArray = messages
            messages.sort(function compare(a, b){
                if (a.date > b.date)
                    return -1;
                if (a.date < b.date)
                    return 1 ;
                return 0;
            })
        setDate(newArray)
            
    }
    
    const checkDateDecroissant = () => {
        let newArray1 = messages
            newArray1.sort(function compare(a, b){
                if (a.date < b.date)
                    return -1;
                if (a.date > b.date)
                    return 1 ;
                return 0;
            })
            setDate(newArray1)
            // console.log("trie",newArray1);*
            console.log(date);
    }

    return (
        <div>
            <h1 className='text-center'>tout vos messages</h1>
            <Nav />
            <div className='container'>

            <div className="input-group input-group-sm mb-3">
                <input 
                    className="form-control"
                    type="text" 
                    placeholder='entrer le nom de votre association pour trouvez les message concernez'
                    onChange={handleSearch}
                />
                <button 
                className="input-group-text"
                onClick={checkDate}
                >trie recent à ancient</button>
                <button 
                className="input-group-text"
                onClick={checkDateDecroissant}
                >trie de ancient à recent</button>
            </div>

                <div className='row'>
                    {messages.filter(value =>{
                        return value.association_concernée.toLowerCase().includes(search.toLowerCase());
                    }).map(message => 
                        <div key={message.date} className='col-4'>
                            <div className="card" style={{width: "18rem"}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">{message.association_concernée} </h5>
                                    <p className="card-text">{message.message}</p>
                                    <p className="card-text">{message.date}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;