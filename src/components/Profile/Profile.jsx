import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LogoutBtn from '../header/Logout';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { name, email } = useSelector((state) => state.auth);
  const [number, setNumber] = useState('');
  const [savedNumber, setSavedNumber] = useState(false);
  const navigate = useNavigate();

  const addRooms = () => {
    navigate('/addroom'); 
  };

  const handleInput = (e) => {
    setNumber(e.target.value);
  };

  const onSave = () => {
    setSavedNumber(true);
  };

  const onEdit = () => {
    setSavedNumber(false);
  };

  const handleHomeClick = () => {
    navigate('/');
  };
  const mylist =()=>{
    navigate('/mylist');
  }

  return (
    <div className=" absolute top-16 bg-white w-full h-screen shadow-lg">
      <div className="bg-white w-4/6 h-auto mx-auto my-8 shadow-2xl rounded-2xl">
        <h1 className="text-2xl font-bold text-center py-4 bg-zinc-700 rounded-t-2xl text-white">
          Profile
        </h1>
        <div className="flex mt-4 px-10 py-6">
          <img    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"

            className="rounded-full w-32 h-32"
            alt="Profile"
          />
          <div className="flex flex-col ml-20 mt-4">
            <h1 className="flex items-center">
              <i className="fas fa-user mr-3"></i>{name}
            </h1>
            <h2 className="flex items-center mt-4">
              <i className="fas fa-envelope mr-3"></i>{email}
            </h2>
            <div className="flex items-center mt-4">
              <i className="fas fa-phone mr-3"></i>
              {!savedNumber ? (
                <div className="flex items-center">
                  <input
                    type="number"
                    placeholder="Enter Your Number"
                    className="border rounded p-2"
                    onChange={handleInput}
                  />
                  <button
                    className="bg-blue-500 text-white rounded-full w-20 h-8 ml-2 hover:bg-blue-600"
                    onClick={onSave}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex items-center">
                  <span>{number}</span>
                  <button
                    className="bg-yellow-500 text-white rounded-full w-20 h-8 ml-2 hover:bg-yellow-600"
                    onClick={onEdit}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 space-y-4 px-20">
          {[
            { icon: 'fa-chart-line', text: 'Dashboard' },
            { icon: 'fa-file-import', text: 'Add Your Post', onClick: addRooms }, 
            { icon: 'fa-rectangle-list', text: 'My List',onClick:mylist },
            { icon: 'fa-bell', text: 'Notification' },
            { icon: 'fa-heart', text: 'Favourite' },
            { icon: 'fa-coins', text: 'Payment Method' },
          ].map((item, index) => (
            <span
              key={index}
              className="flex items-center justify-between border-b-2 border-gray-200 p-4 hover:bg-gray-100 cursor-pointer rounded-lg"
              onClick={item.onClick} 
            >
              <span className="flex items-center font-bold">
                <i className={`fa-solid ${item.icon} mr-4`}></i>{item.text}
              </span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          ))}
        </div>
        <div className="bg-red-600 h-20 rounded-b-2xl text-center mt-6">
          <button
            className="mt-6 font-bold text-2xl text-white flex items-center justify-center w-full h-full"
            onClick={handleHomeClick}
          >
            <LogoutBtn />
            <i className="fa-solid fa-right-from-bracket ml-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
