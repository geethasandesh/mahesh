
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from "../../pages/About";
import Portfolio from '../../pages/Portfolio';
import Services  from '../../pages/Services';
import Contact from '../../pages/Contact';
function Routers() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Routers
