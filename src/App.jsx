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
import Main from "./components/main/Main";
import Footer from "./components/footer/footer";
import { login, logout } from "./store/authSlice";
import Seemore from "./components/main/seemore";
import NA from "./components/main/NA";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <div>
            <Header />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/seemore" element={<Seemore />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/NA" element={<NA />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
