import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import handleCart from './../redux/reducer/HandleCart';
import Cart from './Cart';
import {NavLink} from 'react-router-dom';
import React from 'react';
import '../App.css';

const Navbar2 = () => {
    const state = useSelector((state)=>state.handleCart);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <NavLink to="/emart" className="fw-bold fs-4 navbar-brand">Tommy Aquarel's Fake Webshop</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav links mx-auto mb-2 mb-lg-0 me-auto">
              <NavLink to="/emart" className="nav-link" >Home</NavLink>
              <NavLink to="/products" className="nav-link" >Products</NavLink>
              <NavLink to="/about" className="nav-link" >About</NavLink>
              <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            </Nav>
            <Nav>
              <NavLink to="/register"><Button variant="outline-dark" className="mb-2"><i className="fa fa-user-plus me-1"> Register</i></Button></NavLink>
              <NavLink to="/login"><Button  variant="outline-dark" className="ms-2 mb-2"><i className="fa fa-sign-in me-1"> Login</i></Button></NavLink>
              <NavLink to="/cart"><Button variant="outline-dark" className="ms-2 "><i className="fa fa-shopping-cart me-1"> Cart ({state.length})</i></Button></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navbar2;
