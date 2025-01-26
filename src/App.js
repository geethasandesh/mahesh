import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './Components/Router/Routers'
import Navbar  from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (
   <Router>
    <Navbar/>
    <div>
      <Routers/>
    </div>
    <Footer/>
   </Router>
  )
}

export default App
