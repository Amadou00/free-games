import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
