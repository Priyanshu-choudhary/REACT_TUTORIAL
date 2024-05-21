import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchApiData from './FetchApiData/FetchApiData'
import Card from './card/Card'
import TextField from './TextField/TextField'
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter/Counter'

function App() {


  return (
    <>
 <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">h&yTechLabs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">FetchApiData</Nav.Link>
              <Nav.Link as={Link} to="/about">TextField</Nav.Link>
              <Nav.Link as={Link} to="/counter">counter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-3">
        <Routes>
          <Route path="/" element={<FetchApiData/>} />
          <Route path="/about" element={<TextField/>} />
          <Route path="/counter" element={<Counter/>} />
        </Routes>
       </div>
      </div>
    </Router>

     

    </>
  )
}

export default App
