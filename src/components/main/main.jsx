import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           initialSlide: 1
    //         }
    //       }
    //     ]
    //   };

  return (
  <main>
    
      <div>
      <h1 className="text-2xl font-bold text-center mt-8">Welcome to Roomaroo</h1>
      <p className="text-center mt-4">Find the best rooms for rent</p>
    </div>
     <div>
        <img src="https://huemanhome.com/wp-content/uploads/2018/10/33.jpg" alt="room" className="w-full h-96 object-cover mt-4"/>
     </div>
    <div className="typesofRoom">
        <h1 className="justify-center align-middle ml-96 mt-8 text-3xl font-bold text-gray-600">Find a Place That Fits Your Comfort</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ml-16 ">
            <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 ">
                <h3 className="text-lg font-bold">For Students</h3>
                <p>Find the best rooms for students</p>
                </div>
            <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 ">
                <h3 className="text-lg font-bold">For Family</h3>
                <p>Find the best rooms for family</p>
                </div>
                <div className="bg-gray-200 p-4 h-64 w-2/3 hover:scale-125 ease-in duration-300 ">
                <h3 className="text-lg font-bold">For Family</h3>
                <p>Find the best rooms for Girls</p>
                </div>
            </div>
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