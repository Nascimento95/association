import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListeAssociation from './pages/ListeAssociation';
import 'bootstrap/dist/css/bootstrap.min.css'
import AssociationSelected from './pages/AssociationSelected';
import FormMessage from './pages/FormMessage';
import Message from './pages/Message'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/associations" element={<ListeAssociation/>}/>
          <Route path="/associations/:name" element={<AssociationSelected/>}/>
          <Route path="/associations/formulaire" element={<FormMessage/>}/>
          <Route path="/admin" element={<Message/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;