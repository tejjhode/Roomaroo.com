import React from 'react'

function Main() {
  return (
  <main>
     <div className="hero-sec">
        
     </div>
      <div>
      <h1 className="text-2xl font-bold text-center mt-8">Welcome to Roomaroo</h1>
      <p className="text-center mt-4">Find the best rooms for rent</p>
    </div>
    <div className="compents">
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mt-8">Featured Rooms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="bg-gray-200 p-4 cursor-pointer">
                <h3 className="text-lg font-bold">Room 1</h3>
                <p>Location: Gole Ka Mandir</p>
                <p>Price: Rs. 5000</p>
                <p>Occupency: 2 persons</p>
                <p>For: Students</p>

            </div>
            <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold">Room 2</h3>
                <p>Location: Bank Colony</p>
                <p>Price: Rs. 4000</p>
                <p>Occupency: 2 persons</p>
                <p>For: Family</p>
            </div>
            <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold">Room 3</h3>
                <p>Location: Indramani Nagar</p>
                <p>Price: Rs. 3000</p>
                <p>Occupency: 1 person</p>
                <p>For: Students</p>
            </div>
            <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold">Room 4</h3>
                <p>Location: Pragati Vihar</p>
                <p>Price: Rs. 2500</p>
                <p>Occupency: 1 person</p>
                <p>For: Students</p>
            </div>
            <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold">Room 5</h3>
                <p>Location: Indramani Nagar</p>
                <p>Price: Rs. 9000</p>
                <p>Occupency: 3 persons</p>
                <p>For: Girls </p>
            </div>
            <div className="bg-gray-200 p-4">
                <h3 className="text-lg font-bold">Room 6</h3>
                <p>Location: Krishna Nagar</p>
                <p>Price: Rs. 8500</p>
                <p>Occupency: 3 persons</p>
                <p>For: Students</p>
            </div>
              

            </div>
        </div>
    </div>  

  </main>
  )
}

export default Main