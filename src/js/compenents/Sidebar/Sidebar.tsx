import React from "react";
import { useLocation, Link } from "react-router-dom";
import { SidebarData } from "./data";
import Logo from '../../../assets/images/logo.png'
 

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="bg-white shadow-lg w-64   border-r">
        <div className="flex items-center  ">
          <img
            src={Logo}
            alt="Logo"
    
          />
        </div>

        <div className="flex justify-center my-6">
          <button className="bg-[#198E79] text-white py-3 px-3 rounded-xl">
            Schedule Appointment
          </button>
        </div>
        <nav className="space-y-6">
          {SidebarData.map((item) => (
            <a
              href={item.path}
              key={item.selectorId}
              className="flex items-center space-x-2 text-[#110C2C] hover:text-gray-800 hover:bg-gray-200 hover:border-r-4 hover:border-[#110C2C] px-4 py-2 w-full  "
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
