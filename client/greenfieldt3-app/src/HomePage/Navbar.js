import React from 'react';
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Create a custom CSS file (Navbar.css)
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* <a className="navbar-brand" href="/">Your Logo or Brand Name</a> */}
        avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                S&S
              </Avatar>
            }
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Use 'mx-auto' class to center links */}
            <li className="nav-item">
            <Link classname="nav-link" to={'/Home'}>Home</Link>
            </li>    
            <li className="nav-item">
            <Link className="nav-link" to={'/sign-in'}>Login </Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to={'/sign-up'}>Sign up</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;