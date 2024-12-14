import React from "react";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between w-full">
      <div className="relative w-1/2">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Quick search patient"
          className="w-full pl-10 pr-4 py-2 text-gray-500 placeholder-gray-500 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="rounded-full mr-2 w-8 h-8"
        />
        <span className="text-gray-600 font-medium">Kim Jones</span>
        <span className="text-gray-500 ml-2">EN</span>
      </div>
    </header>
  );
};

export default Header;
