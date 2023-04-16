import React from 'react';
import { Link, NavLink  } from "react-router-dom";
import './Header.css';
import 'boxicons';

const Header = () => {
  return (
    <>
  
  <header>
    <nav className="nav-bar" id="myTopnav">
      <a href="" className="active" style={{ color: "black" }}>
        home
      </a>
      <a href="" style={{ color: "black" }}>
        Donor Center Location
      </a>
      <a href="" style={{ color: "black" }}>
        About Us
      </a>
      <a href="" style={{ color: "black" }}>
        Contant
      </a>
      <button
        className=" btn1-1"
        onclick="window.location.href='';">
        donate
      </button>
      
      <a href="javascript:void(0);" className="icon2" onclick="myFunction() ">
      <i className="fa fa-bars"  />

      </a>
    </nav>
  </header>
</>

  );
}

export default Header;

