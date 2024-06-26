import React, { useState } from 'react';
import cities from './city';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutBtn from './Logout';
import Logo from '../Logo';


function Header() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  
    
  const clickAnywhere = () => {
    setShowSuggestions(false);
  };
  
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowSuggestions(true);
  };

  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    search(suggestion);
  };

  const filterCity = (value) => {
    return cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
  };

  const search = (suggestion) => {
    if (typeof suggestion !== 'string') {
      throw("Invalid input");
    }
    if (suggestion.toLowerCase() === 'gwalior') {
      console.log("City Found");
      navigate('/');
    } else {
      alert(suggestion.toUpperCase() + " is not available now");
      navigate('/NA');
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header className="bg-gray-800 text-white max-md:w-full" onClick={clickAnywhere}>
      <nav className="container mx-auto flex items-center  py-4 px-6 ">
        <div className="flex items-center">
          <div className=" h-8 w-36 cursor-pointer max-md:w-32 max-md:mt-2 " onClick={handleHomeClick}><Logo /></div>
        </div>
        <ul className="flex space-x-40 ml-60 max-md:ml-0 max-sm:space-x-0 max-md:text-xs">
          <li>
            <button onClick={handleHomeClick} className="hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-10 ">Home</button>
          </li>
          <li>
            <button className="hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-10">About</button>
          </li>
          <li>
            <button className="hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-15">Contact Us</button>
          </li>
          {!authStatus && (
            <>
              <li>
                <button onClick={handleLoginClick} className="hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-10">Login</button>
              </li>
              <li>
                <button onClick={handleSignupClick} className="hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-12">Sign Up</button>
              </li>
            </>
          )}
          {authStatus && (
            <>
              <li>
                <button className="hover:hover:bg-gray-400 rounded-2xl w-20 font-serif max-md:w-10" onClick={handleProfileClick}>Profile</button>
              </li>
              <li>
               <div onClick={handleHomeClick}>  <LogoutBtn /></div>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="hero-sec bg-gray-900 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Find your next home</h1>
        <p className="text-lg mb-8">Search for your next home or apartment with Roomaroo</p>
        <div className="search mx-auto max-w-lg flex justify-center items-center">
          <div className="input-container relative w-full">
            <input 
              type="text" 
              placeholder="Search for a city..."
              value={inputValue}
              onChange={handleChange}
              className="w-full py-2 px-4 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500 text-black"
            />
            {showSuggestions && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg text-black max-h-64 overflow-hidden overflow-y-auto no-scrollbar z-10">
                {filterCity(inputValue).map((suggestion, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleSuggestion(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button 
            className="bg-blue-500 text-white py-2 px-6 rounded-full ml-2 hover:bg-blue-600"
            onClick={() => search(inputValue)}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
