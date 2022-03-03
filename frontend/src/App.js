import './App.css';
import Home from "./component/pages/home"
import About from './component/pages/about';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './component/pages/navbar';
import Signup from './component/pages/signUp';
import  Login from './component/pages/logIn';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
         </Routes> 
    </Router>
  );
}

export default App;
