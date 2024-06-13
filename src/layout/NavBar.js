import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png'; 

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={logo} alt="No Image" style={{height:'50px', width:'80px'}}></img></Link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/employee'>Employee</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;
