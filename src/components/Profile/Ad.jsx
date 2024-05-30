import React from 'react';
import appwriteServices from '../../appwrite/config';
import { Link } from 'react-router-dom';

function Ad({ $id, tittle, price, size, bhk, type, furnished, bathroom, image, independent }) {
  return (
   
    <Link to={`/post/${$id}`}>
     
      <div className="bg-white h-40 w-3/4 rounded-2xl flex shadow-2xl shadow-black mt-6 ml-20 max-md:-ml-36 max-md:w-96 ">
        <img
          src={appwriteServices.getFilePreview(image)}
          alt={tittle}
          className="h-32 w-44 mt-4 ml-4 rounded-3xl  max-md:h-32 max-md:w-20 "
        />
        <div className="w-2/4 max-md:w-10">
          <h1 className="text-black ml-10 mt-4 underline font-extralight max-md:ml-1 max-md:text-xs">{tittle}</h1>
          <div className="h-24 w-full bg-slate-200 rounded-2xl ml-10 mt-2 max-md:ml-1 max-md:w-52 max-md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 gap-4 pt-4 max-md:ml-0 max-md:gap-3  max-md:text-sm  max-md:grid-cols-3 max-md:mt-4 ">
              <p className="max-md:text-xs "><i className="fas fa-couch "></i> {furnished}</p>
              <p><i className="fas fa-bed max-md:text-xs"></i> {bhk} BHK</p>
              <p><i className="fas fa-bath max-md:text-xs"></i> {bathroom} Bath</p>
              <p><i className="fas fa-user-graduate max-md:text-xs"></i> {type}</p>
              <p><i className="fas fa-ruler-combined max-md:text-xs"></i> {size} sqft</p>
              <p  ><i className="fas fa-home max-md:text-xs"></i>  {independent}</p>
            </div>
          </div>
        </div>
        <div className="w-3/8 h-full bg-gray-200 ml-40 rounded-r-2xl max-md:w-20 max-md:ml-44">
          <h1 className="font-bold text-2xl ml-14 mt-4 max-md:ml-2 max-md:text-sm  max-md:mt-10">₹{price}</h1>
          <button className="bg-gray-900 w-4/6 h-8 text-white ml-8 mt-3 rounded-3xl max-md:text-xs max-md:ml-2 max-md:w-14 ">Contact Owner</button>
          <button className="bg-white w-4/6 h-8 text-gray-900 ml-8 mt-3 rounded-3xl max-md:text-xs max-md:ml-2 max-md:w-14 ">Make an Offer</button>
        </div>
      </div>
    </Link>
  );
}

export default Ad;
