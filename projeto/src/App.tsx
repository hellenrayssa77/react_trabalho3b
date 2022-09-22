import { format } from 'path';
import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 
"react-router-dom";
import { Home } from './pages/Home';
import { Contatos } from './pages/Contatos';
import { Servicos } from './pages/Servicos';
import { Menu } from './components/Menu';


function App() {
  return (
   <>
   <BrowserRouter>
   <Menu />
      <Routes>     
        <Route path='/home' element={<Home/>}/>  
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
