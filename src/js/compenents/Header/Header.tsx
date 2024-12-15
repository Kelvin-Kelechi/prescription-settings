import React, { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import Profile from '../../../assets/images/profile.png'
const Header: React.FC = () => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   const toggleDropdown = () => {
     setIsDropdownOpen(!isDropdownOpen);
   };
  return (
    <header className="bg-white border-b px-12 py-4 flex items-center justify-between w-full sticky top-0 z-50">
      <div className="relative w-1/2">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
        <input
          type="text"
          placeholder="Quick search patient"
          className="w-full pl-10 pr-4 py-2 text-gray-500 placeholder-gray-500 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <IoMdNotifications
            size={25}
            className="text-black transform rotate-[30deg] group-hover:rotate-[45deg] transition-transform duration-300 ease-in-out"
            title="Notifications"
          />
          {/*  
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span> */}
        </div>
        <img
          src={Profile}
          alt="User Avatar"
          className="rounded-full mr-2 w-8 h-8"
        />

        <span className="text-gray-600 font-normal">Kim Jones</span>
        <div
          className="flex border-b-2 border-gray-400 items-center space-x-1"
          onClick={toggleDropdown}
        >
          <span>EN</span>
          <FaChevronDown
            className={`text-gray-500 transform ${
              isDropdownOpen ? "rotate-180" : ""
            } transition-transform text-[10px] duration-300`}
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute right-4  mt-20 w-22 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <ul className="py-0">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">EN</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
