import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import appwriteServices from '../../appwrite/config';
import MyList from '../Form/MyList'

function Seemore() {

  const [budget, setBudget] = useState({ min: 1000, max: 100000 });
  const [accommodationType, setAccommodationType] = useState('Any');
  const [BHK, setBHK] = useState('');
  const [sortBy, setSortBy] = useState('Price - Low to High');
  

  appwriteServices.getPost([]).then((posts) => {
    if (posts) {
        console.log(posts.documents)
    }
    
  });

    const handleAccommodationTypeChange = (e) => {
    setAccommodationType(e.target.value);
    console.log(e.target.value);
  };

    const handleBHKChange = (e) => {
    setBHK(e.target.value);
    console.log(setBHK);
    
  }
  

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: Number(value),
    }));
  };


  return (
    <div className="absolute top-16 bg-white w-full h-screen shadow-lg">
      <nav className="bg-gray-900 w-full h-16 flex items-center justify-center shadow-md">
        <div className="flex space-x-6 text-white">
          <label className="flex items-center space-x-2" onChange={handleAccommodationTypeChange}>
            <span>Accommodation Type</span>
            <select className="ml-2 p-1 rounded text-black" >
             <option>Any</option>
              <option>Student</option>
              <option>Family</option>
              <option>Girls</option>
              <option>Boys</option>
            </select>
          </label>
          <label className="flex items-center space-x-2" onChange={handleBHKChange}>
            <span>BHK</span>
            <select className="ml-2 p-1 rounded text-black">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
            <span>Sort by</span>
            <select className="ml-2 p-1 rounded text-black">
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Rate/sqft - Low to High</option>
              <option>Rate/sqft - High to Low</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
            <span>Budget</span>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                name="min"
                min="1000"
                max="100000"
                value={budget.min}
                onChange={handleBudgetChange}
                className="slider"
              />
              <div className="flex flex-col items-center text-white">
                <span>Price: {budget.min}</span>
              </div>
            </div>
          </label>
        </div>
      </nav>
      <main>
        <div className="components mt-10 ml-40 cursor-pointe r">
          <div className="bg-black h-full">
          <MyList />
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default Seemore;
