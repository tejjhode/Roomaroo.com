import React, { useState } from 'react';
import cities from './city';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0">
      <nav className="container mx-auto flex items-center justify-between py-4 ">
        <h1 className="text-2xl font-bold">Roomaroo</h1>
        <ul className="flex space-x-4">
          <li><button onClick={handleHomeClick} className="hover:text-gray-300">Home</button></li>
          <li><button className="hover:text-gray-300">About</button></li>
          <li><button className="hover:text-gray-300">Contact Us</button></li>
          <li><button onClick={handleLoginClick} className="hover:text-gray-300">Login</button></li>
          <li><button onClick={handleSignupClick} className="hover:text-gray-300">Sign Up</button></li>
        </ul>
      </nav >
      
    </header>
  );
}

export default Header;
