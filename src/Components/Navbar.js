import React from 'react';
import "../CSS/Navbar.css";
import logo from "../Images/logo.jpeg";
import nmc from "../Images/nmc.png";

function Navbar() {
  return (
    <>
    <nav className='main-nav'>

      

      
      <div className='navbarleft'>
        <img src={logo} width="125px" height="125px" alt=""  />
      </div>
      <div className='navbarcenter'>
        <h1>Nashik City DashBoard</h1>
      </div>
      <div className='navbarright'>
        <img src={logo} width="125px" height="125px" alt=""  />
      </div>

      
    
      
    </nav>
    </>
  );
};

export default Navbar;
