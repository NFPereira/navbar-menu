import React from 'react'

//importação do css
import './App.css'

//impor react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contatos from './pages/Contatos';



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/servicos" element={<Servicos/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
      </Routes>
    </Router>
  )
}

export default App