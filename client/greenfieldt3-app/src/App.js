// import categoryCards from ("./Cards/categoryCards");
// //import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import Login from "./components/loginForm";
// import SignUp from "./components/signupForm";
// import { BrowserRouter as Router, , RoutesRoute, Link } from 'react-router-dom'


// function App() {
//   return (
    
     
//     <Router>
//       <div className="App">
//       <header></header>
//       <h1>Welcome to Shop</h1>
//       <categoryCard/>
    
//       <div className= "login">
//       <Link className="nav-link" to={'/sign-in'}>Login </Link>
//       <Link className="nav-link" to={'/sign-up'}>Sign up</Link>
//       </div>
//       <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//     <footer></footer>
//     </div>
  
//     </Router>
    
//   )
// }
// export default App;


import CardsCategory from "./Cards/cardsCategory";
import Footer from "./HomePage/Footer";
import Navbar from "./HomePage/Navbar";
// import Header from "./HomePage/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px'}}>Welcome to Shop & Shine</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardsCategory />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;





