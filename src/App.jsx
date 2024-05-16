import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/header/Header'
import authService from './appwrite/auth';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { Outlet } from 'react-router-dom';
import  Main from './components/main/main';
import Footer from './components/footer/footer';
import {login,logout} from "./store/authSlice"


function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])



  return ! loading ? (
    <Router>
      <div>
        <Header />
        <main>
          TODO:<Outlet />
        </main>
        <Main />
        <Footer />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  ):null;
}

export default App
