import React from 'react'

//importação do css
import './App.css'

//impor react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App