import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import rider from "../../assets/riders.png"
import { NavLink } from "react-router-dom"
const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
        <img src={rider} alt="img" style={{
                        height:"45px",
                        width:"45px"
                    }}/>
          <NavLink to="/" className="text-decoration-none text-light mx-2"><h2 style={{color:"red"}}>Riders Interface</h2></NavLink>&nbsp;
          <Nav className="me-auto ml-7">
            <NavLink to="/" className="text-decoration-none text-light ">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers