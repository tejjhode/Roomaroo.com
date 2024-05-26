import React, { useState, useEffect } from "react";
import Ad from "../Profile/Ad";
import appwriteServices from '../../appwrite/config';

function MyList() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [budget, setBudget] = useState({ min: 0, max: 20000 });
  const [accommodationType, setAccommodationType] = useState('any');
  const [BHK, setBHK] = useState('All');
  const [sortBy, setSortBy] = useState('Price - Low to High');
  
  useEffect(() => {
    appwriteServices.getPost([]).then((posts) => {
      if (posts) {
        setList(posts.documents);
        setFilteredList(posts.documents);
      }
    });
  }, []);

  const handleAccommodationTypeChange = (e) => {
    setAccommodationType(e.target.value);
  };

  const handleBHKChange = (e) => {
    setBHK(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      [name]: Number(value),
    }));
  };

  

  useEffect(() => {
    filterPosts();
  }, [accommodationType, BHK, budget, sortBy]);

  const filterPosts = () => {
    let filtered = list;

    if (accommodationType !== 'any') {
      filtered = filtered.filter(post => post.type === accommodationType);
    }
    if (BHK !== 'All') {
      filtered = filtered.filter(post => post.bhk === Number(BHK));
    }
    filtered = filtered.filter(post => post.price >= budget.min && post.price <= budget.max);

    switch (sortBy) {
      case 'Price - Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price - High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Most Recent':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Most Popular':
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'Rate/sqft - Low to High':
        filtered.sort((a, b) => a.ratePerSqft - b.ratePerSqft);
        break;
      case 'Rate/sqft - High to Low':
        filtered.sort((a, b) => b.ratePerSqft - a.ratePerSqft);
        break;
      default:
        break;
    }

    setFilteredList(filtered);
  };

 

  return (
    <div className="absolute top-16 h-full w-full bg-white">
      <nav className="bg-gray-900 w-full h-16 flex items-center justify-center shadow-md">
        <div className="flex space-x-6 text-white">
          <label className="flex items-center space-x-2">
            <span>Accommodation Type</span>
            <select
              className="ml-2 p-1 rounded text-black"
              value={accommodationType}
              onChange={handleAccommodationTypeChange}
            > 

              <option>any</option>
              <option>student</option>
              <option>family</option>
              <option>girls</option>
              <option>boys</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
            <span>BHK</span>
            <select
              className="ml-2 p-1 rounded text-black"
              value={BHK}
              onChange={handleBHKChange}
            >
              <option value="">All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
            <span>Sort by</span>
            <select
              className="ml-2 p-1 rounded text-black"
              value={sortBy}
              onChange={handleSortByChange}
            >
              <option>Price - Low to High</option>
              <option>Price - High to Low</option>
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Rate/sqft - Low to High</option>
              <option>Rate/sqft - High to Low</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
            <span>Minimun Budget</span>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                name="min"
                min="0"
                max="20000"
                step="5000"
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
      <div className="components mt-10 ml-40 cursor-pointer">
        {filteredList.length > 0 ? (
          filteredList.map((post) => (
            <div key={post.$id}>
              <Ad {...post} />
            </div>
          ))
        ) : (
          <div className="text-center mt-10">No posts available</div>
        )}
      </div>
    </div>
  );
}

export default MyList;
