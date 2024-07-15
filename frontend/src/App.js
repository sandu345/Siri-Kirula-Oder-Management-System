import React from "react";
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Signup";
import Home from "./Home";
import Register from "./Register";
import AllOrders from './AllOrders';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/register" element={<Register />} />
      <Route path="/orders" element={<AllOrders />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
