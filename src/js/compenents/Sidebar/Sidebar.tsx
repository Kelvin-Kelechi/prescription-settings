import React from "react";
import { useLocation, Link } from "react-router-dom";
import { SidebarData } from "./data";
 
 

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="bg-white shadow-lg w-64 px-4 py-6 border-r">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="text-xl font-bold text-gray-800">HealTether</span>
        </div>
        <nav className="space-y-10">
          {SidebarData.map((item) => (
            <a
              href={item.path}
              key={item.selectorId}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
