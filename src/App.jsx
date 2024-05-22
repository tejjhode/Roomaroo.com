import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "./components/header/Header";
import authService from "./appwrite/auth";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./components/signup/signup";
import { Outlet } from "react-router-dom";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { login, logout } from "./store/authSlice";
import Seemore from "./components/main/seemore";
import NA from "./components/main/NA";
import Profile from "./components/Profile/Profile";

function App() {
  const [loading, setLoading] = useState(true);
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
  
  return !loading ? (
    
    <Router>
          <div>
          
            
            <Header />

            <Routes>
            <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Main />} />
              
              <Route path="/seemore" element={<Seemore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/NA" element={<NA />} />
            </Routes>
            <Footer />
          </div>
        </Router>
  ) : null;

  
}

export default App;
