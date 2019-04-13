import React from "react";
import rdf from "rdflib";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Button } from "yoda-design-system";

const FOAF = new rdf.Namespace("http://xmlns.com/foaf/0.1/");

const Navigation = () => {
  
    return (
      <div style={{ padding: "3%" }}>
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand>
            <img src="favicon.ico" width="30" height="30" alt="Solid logo" />
            <span style={{ marginLeft: "5%" }}>Solid Web</span>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink 
              to="/healthcase" 
              style={{ color: "#000", marginLeft: "10%" }}>
              Healthcase
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
 
export default Navigation;