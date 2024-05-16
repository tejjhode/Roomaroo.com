import React, {  act, useState } from 'react';
import cities from './city'; 
// import './Header.css'; 
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'


function Header() {
  // const authStatus = useSelector((state) => state.auth.status);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); 
  const navigate = useNavigate();
 
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filteredCities = cities.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredCities);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true); 
  };


  const handleInputBlur = () => {
    setShowSuggestions(false);
  };



  const handleLoginClick = () => {
    navigate('/login'); 
  };
  const handleHomeClick = () => {
    navigate('/'); 
  };

  const handleSignupclick = () => {
    navigate("/signup"); 
  }
 const handleSuggestionsClick = (city) => {
  console.log(city);
    setSearchTerm(city);
    setSuggestions([]);
  }


  return (
    <header className="bg-gray-800 text-white">
  <nav className="container mx-auto flex items-center justify-between py-4">
    <h1 className="text-2xl font-bold">Roomaroo</h1>
    <ul className="flex space-x-4">
      <li><button onClick={handleHomeClick} className="hover:text-gray-300">Home</button></li>
      <li><button className="hover:text-gray-300">About</button></li>
      <li><button className="hover:text-gray-300">Contact US</button></li>
      <li><button onClick={handleLoginClick} className="hover:text-gray-300">Login</button></li>
      <li><button onClick={handleSignupclick} className="hover:text-gray-300">Sign Up</button></li>
    </ul>
  </nav>
  <div className="hero-sec bg-gray-900 py-16 px-6 text-center ">
    <h1 className="text-4xl font-bold mb-4">Find your next home</h1>
    <p className="text-lg mb-8">Search for your next home or apartment with Roomaroo</p>
    <div className="search mx-auto max-w-lg flex justify-center align-middle">
      <div className="input-container relative ">
        <input 
          type="text" 
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleInputFocus} 
          onBlur={handleInputBlur} 
          className="w-full py-2 px-4 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500 text-black"
        />
       {showSuggestions && (
  <ul className="absolute top-full left-0 bg-black shadow-md mt-1 py-2 px-4 rounded-lg  h-40 overflow-scroll no-scrollbar">
    {suggestions.map((city, index) => (
      <li    key={index} onClick={console.log("clicked")} className="cursor-pointer hover:bg-red-500"> {city}</li>
    ))}
  </ul>
)}

      </div>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full ml-2 hover:bg-blue-600 ">Search</button>
    </div>
  </div>
</header>

  );
}

export default Header;
