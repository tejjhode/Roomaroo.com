import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Seemore() {
  const [budget, setBudget] = useState({ min: 1000, max: 100000 });
  useState

 

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
          <label className="flex items-center space-x-2">
            <span>Property Type</span>
            <select className="ml-2 p-1 rounded text-black">
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Commercial</option>
            </select>
          </label>
          <label className="flex items-center space-x-2">
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
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/21/Photo_h0_w320/72441467_9_000172942_0_320.jpg"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in Gole ka mandir
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> Semi-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 1 BHK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 1 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Students
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 1400 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Independent
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹8,000</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in Keshar Tower
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> Fully-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 2 BHK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 2 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Family
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 2800 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Independent
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹12,000</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in DD Nagar
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> Fully-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 1 BHK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 1 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Students
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 1750 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Independent
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹7,500</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in Krishna Nagar
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> No-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 1 BHK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 1 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Girls
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 1400 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Owner Lives in
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹5,000</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in Pragati Vihar
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> No-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 1 BK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 1 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Students
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 1000 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Owner Lives in
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹2,500</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
            <div className="h1 bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-32 w-44 mt-4 ml-4 rounded-3xl"
              />
              <div className="w-2/4">
                <h1 className="text-black ml-10 mt-4 underline font-extralight">
                  Room For Rent in Bank colony
                </h1>
                <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
                    <p>
                      <i className="fas fa-couch"></i> Semi-Furnished
                    </p>
                    <p>
                      <i className="fas fa-bed"></i> 2 BHK
                    </p>
                    <p>
                      <i className="fas fa-bath"></i> 2 Bathroom
                    </p>
                    <p>
                      <i className="fas fa-user-graduate"></i> For: Girls
                    </p>
                    <p>
                      <i className="fas fa-ruler-combined"></i> Area: 3000 sqft
                    </p>
                    <p>
                      <i className="fas fa-home"></i> Independent
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
                <h1 className="font-bold text-2xl ml-14 mt-4">₹10,000</h1>
                <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
                  Contact Owner
                </button>
                <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
                  Make an Offer
                </button>
              </div>
            </div>
          
        </div>
      </main>
    </div>
  );
}

export default Seemore;
