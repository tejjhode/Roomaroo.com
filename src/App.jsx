import React from 'react'
import Header from './components/header/Header'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Outlet } from 'react-router-dom';
import  Main from './components/main/main';


function App() {


  return (
    <Router>
      <div>
        <Header />
        <Main />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
