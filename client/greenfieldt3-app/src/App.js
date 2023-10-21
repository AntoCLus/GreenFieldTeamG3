//import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from "./components/loginForm";
import SignUp from "./components/signupForm";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
     <div className="App">
      <header className="App-header">
      </header>
      <div className= "login">
      <Link className="nav-link" to={'/sign-in'}>Login </Link>
      <Link className="nav-link" to={'/sign-up'}>Sign up</Link>
      </div>
      <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
    <footer></footer>
    </div>
  
    </Router>
    
  )
}
export default App;
