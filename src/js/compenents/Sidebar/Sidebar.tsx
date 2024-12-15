import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { SidebarData } from "./data";
import Logo from "../../../assets/images/logo.png";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState<string | null>(null);

  // Update active path based on current URL and store it in localStorage
  useEffect(() => {
    const currentPath = location.pathname;
    setActivePath(currentPath);
    localStorage.setItem("activeSidebarLink", currentPath); // Store active link in localStorage
  }, [location]);

  useEffect(() => {
    // Retrieve active link from localStorage when component mounts
    const storedActivePath = localStorage.getItem("activeSidebarLink");
    if (storedActivePath) {
      setActivePath(storedActivePath);
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex">
      <div className="bg-white shadow-lg w-64 border-r">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex justify-center my-6">
          <button className="bg-[#198E79] text-white py-3 px-3 rounded-xl">
            Schedule Appointment
          </button>
        </div>

        <nav className="space-y-6">
          {SidebarData.map((item) => (
            <Link
              to={item.path} // Use 'Link' to handle navigation in React Router
              key={item.selectorId}
              className={`flex items-center space-x-2 text-[#110C2C] hover:text-gray-800 hover:bg-[#F5F5F5] px-4 py-2 w-full ${
                activePath === item.path
                  ? "bg-[#F5F5F5] border-r-4 border-[#110C2C]" // Apply active styles
                  : ""
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
