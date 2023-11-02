//import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from "./components/loginForm";
import SignUp from "./components/signupForm";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
//import CardsCategory from "./Cards/categoryCards";
import { Footer } from './HomePage/Footer';
import Navbar from "./HomePage/Navbar";
import Home from "./components/homePage"
import AddItem from "./components/createItem"
import DeleteItem from "./components/deleteItem"
import { BrowserRouter } from 'react-router-dom';
import Services from "./components/services";
import EditItem from './components/editItem';


function App() {
  return (
    <Router>
    
      <div className="App">
      <Navbar />
      <header>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px'}}>Welcome to Shop & Shine</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
      </div>
     
      <Routes>
      <Route path="/update/:id" component={<EditItem />} />
      <Route path="/add-item" element={<AddItem />} />
      <Route path="/delete-item" element={<DeleteItem />} />
      <Route path="/services" element={<Services />} />
      <Route path="/home" element ={<Home/>}/>
     <Route exact path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
       <Route path="/sign-up" element={<SignUp />} />
              
            </Routes>
    
    <Footer />
    </div>
  
    </Router>
    
  )
}
export default App;