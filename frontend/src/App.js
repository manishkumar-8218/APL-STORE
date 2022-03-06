import './App.css';
import Home from "./component/pages/home"
import About from './component/pages/about';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Navbar from './component/pages/navbar';
import Signup from './component/pages/signUp';
import  Login from './component/pages/logIn';
import Adminnavbar from './component/admin/adminNavbar';
import Makelibreriecard from './component/admin/makeLibrerieCard';
import Makelibrerieinfo from './component/admin/makeLibrerieInfo';

function App() {
  return (
    <Router>
        {/* <Navbar/> */}
        <Adminnavbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/makeLibrerieCard" isAdmin={true} element={<Makelibreriecard/>}/>
          <Route path="/makeLibrerieInfo" isAdmin={true} element={<Makelibrerieinfo/>}/>
         </Routes> 
    </Router>
  );
}

export default App;
