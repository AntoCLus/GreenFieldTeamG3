// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//     <div className="container">
//       <a className="navbar-brand" href="/">Your Logo or Brand Name</a>
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" href="/home">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/about">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/services">Services</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
  
//   );
// }

// export default Navbar;


import React from 'react';
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Create a custom CSS file (Navbar.css)

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
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


