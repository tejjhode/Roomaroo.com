import React from 'react';
import appwriteServices from '../appwrite/config';
import { Link } from 'react-router-dom';

function Ad({ $id, tittle, price, size, bhk, type, furnished, bathroom, image,independent }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="">
      <div className=" bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6 ml-10">
        
          <img
            src=""
            alt={tittle}
            className="h-32 w-44 mt-4 ml-4 rounded-3xl"
          />
        
        <div className="w-2/4">
          <h1 className="text-black ml-10 mt-4 underline font-extralight">
            {tittle}
          </h1>
          <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4">
              <p>
                <i className="fas fa-couch"></i> {furnished ? 'Furnished' : 'Unfurnished'}
              </p>
              <p>
                <i className="fas fa-bed"></i> {bhk} BHK
              </p>
              <p>
                <i className="fas fa-bath"></i> {bathroom} Bathrooms
              </p>
              <p>
                <i className="fas fa-user-graduate"></i> {type}
              </p>
              <p>
                <i className="fas fa-ruler-combined"></i> {size} sqft
              </p>
              <p>
                <i className="fas fa-home"></i> {independent}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/8 h-full bg-gray-200 ml-36 rounded-r-2xl">
          <h1 className="font-bold text-2xl ml-14 mt-4">₹{price}</h1>
          <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl">
            Contact Owner
          </button>
          <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl">
            Make an Offer
          </button>
        </div>
      </div>
      </div>
    </Link>
  );
}

export default Ad;
