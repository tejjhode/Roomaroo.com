import React,{useState} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import cities from '../header/city';

function Main() {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
  
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
        navigate('/')
      } else {
        alert(suggestion.toUpperCase()+" is not available now");
        navigate('/NA')
        
      }
    };
    
   const clickanywhere = () => {
         setShowSuggestions(false);
    };

    const handleSeeMore = () => {
        navigate('/seemore'); 
    };

  

  return (
   <div onClick={clickanywhere}>
     <div className="hero-sec bg-gray-900 py-16 px-6 text-center">
    <h1 className="text-4xl font-bold mb-4 text-white">Find your next home</h1>
    <p className="text-lg mb-8 text-white">Search for your next home or apartment with Roomaroo</p>
    <div className="search mx-auto max-w-lg flex justify-center align-middle">
      <div className="input-container ">
        <input 
          type="text" 
          placeholder="Search for a city..."
          value={inputValue}
          onChange={handleChange}
          className="w-full py-2 px-4 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500 text-black"
        />
        {showSuggestions && (
          <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg text-black h-64 overflow-hidden overflow-scroll no-scrollbar">
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
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full ml-2 hover:bg-blue-600" onClick={() => search(inputValue)}>
        Search
      </button>
    </div>
  </div>
  <main className="bg-slate-50">
   
    
      <div>
      <h1 className="text-2xl font-bold text-center mt-0 font-mono">Welcome to Roomaroo</h1>
      <p className="text-center mt-4 font-serif">Find the best rooms for rent</p>
    </div>
     <div>
        <img src="https://huemanhome.com/wp-content/uploads/2018/10/33.jpg" alt="room" className="w-full h-96 object-cover mt-4"/>
     </div>
    <div className="typesofRoom">
        <h1 className="justify-center align-middle ml-96 mt-8 text-3xl font-bold text-gray-600">Find a Place That Fits Your Comfort</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ml-16 ">
            <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 room-card rounded-2xl shadow-2xl shadow-black" style={{backgroundImage: `url('https://roomhunt.ee/wp-content/uploads/2018/10/39-2-2-360x360.jpg')`}}>
                <h3 className="font-bold text-white text-2xl  "><br /><br /><br /><br /><br />For Students</h3>
                <p className='text-white align-text-bottom '>Find the best rooms for students</p>
                </div>
            <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 rounded-2xl shadow-2xl shadow-black" style={{backgroundImage:`url('https://hips.hearstapps.com/hmg-prod/images/alexander-design-contemporary-family-room-1555952765.jpg')`, backgroundSize:'cover'}}>
                <h3 className="text-2xl font-bold text-white"><br /><br /><br /><br /><br />For Family</h3>
                <p className='text-white'>Find the best rooms for family</p>
                </div>
                <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 rounded-2xl shadow-2xl shadow-black " style={{backgroundImage:`url('https://hips.hearstapps.com/hmg-prod/images/girls-bedroom-garrow-kedigan-res14949-1635281078-65245f766f39c.jpeg')`, backgroundSize:'contain'}}>
                <h3 className="text-2xl font-bold text-white"><br /><br /><br /><br /><br />For Girls</h3>
                <p className='text-white'>Find the best rooms for Girls</p>
                </div>
            </div>
    </div>
    <div className="compents">
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mt-8">Featured Rooms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="data:image/jpeg;base64,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" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 1</h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold">Location:</span>Krishna Nagar</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 8500</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 3 persons</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Students</p>
  </div>
</div>
            {/* <div className="bg-gray-200 p-4 rounded-lg shadow-lg" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52FK68NL6LWkLawSFlJNuXhlkO8Z7r95igA&s')`, backgroundSize: "cover" }}> */}
            <div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52FK68NL6LWkLawSFlJNuXhlkO8Z7r95igA&s" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 2</h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold">Location:</span> Bank Colony</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 4000</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 2 persons</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Family</p>
  </div>
</div>

{/* </div> */}

<div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="data:image/jpeg;base64,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" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 3</h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold ">Location:</span>Indramani Nagar</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 9000</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 3 persons</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Students</p>
  </div>
</div>
<div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25BzBHGkA9fi_lJfYmN31Tse1pNVSGF4peA&s" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 4</h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold">Location:</span>Pragati Vihar</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 2000</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 1 person</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Students</p>
  </div>
</div>
<div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="data:image/jpeg;base64,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" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 5 </h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold">Location:</span>Indramani Nagar</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 6000</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 2 persons</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Girls</p>
  </div>
</div>
<div className=" bg-white p-6 rounded-lg flex items-center cursor-pointer hover:scale-90 ease-in duration-300 shadow-2xl ">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoxTicrt1AirEA7QqQrd3mvKUoWZvfRX6JKFqlJoqXA&s" alt="Room" className=" w-56h-32  mr-6 ml-0 rounded-lg  top-0" />
  <div>
    <h3 className="text-xl font-bold mb-4 ">Room 6</h3>
    <div className="border-t-2 border-gray-400 mb-4"></div>
    <p className="text-sm mb-2"><span className="font-semibold">Location:</span>Bhagirathi Apartment</p>
    <p className="text-sm mb-2"><span className="font-semibold">Price:</span> Rs. 4000</p>
    <p className="text-sm mb-2"><span className="font-semibold">Occupancy:</span> 4 persons</p>
    <p className="text-sm mb-2"><span className="font-semibold">For:</span> Family</p>
  </div>
</div>

            </div>
            <button
                        onClick={handleSeeMore}
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                        See More...
                    </button>
        </div>
    </div>  

  </main>
   </div>
  )
}

export default Main