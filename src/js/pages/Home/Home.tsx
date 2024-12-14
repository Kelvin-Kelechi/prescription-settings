import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import Prescriptions from "./Prescriptions";

const UserProfile: React.FC = () => {
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [aiPredictiveSearchEnabled, setAiPredictiveSearchEnabled] =
    useState(false);

  const handleChangeSubscription = () => {
    setShowPrescriptions(true);
  };

  const toggleAiPredictiveSearch = () => {
    setAiPredictiveSearchEnabled((prev) => !prev);
  };

  // If showPrescriptions is true, return only the Prescriptions component
  if (showPrescriptions) {
    return <Prescriptions />;
  }

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="text-gray-600">
          <span className="text-sm">
            <a href="#" className="hover:underline">
              Home
            </a>{" "}
            &gt;{" "}
            <a href="#" className="hover:underline">
              User Profile
            </a>
          </span>
        </div>
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <FaSyncAlt className="mr-1" /> Refresh
        </button>
      </div>

      {/* Main Content */}
      <div className="p-8 flex space-x-8">
        {/* Left Sidebar */}
        <div className="w-2/4">
          {/* Profile Card */}
          <div className="bg-white p-4 rounded-md flex items-center mb-4 shadow-md">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20 mr-4"
            />

            {/* Profile Details */}
            <div className="flex-1">
              <p className="font-medium text-lg">Dr. Kim Jones</p>
              <span className="text-xs text-white bg-yellow-400 px-2 py-1 rounded-md">
                Super Admin
              </span>
              <div className="mt-4 space-x-2">
                <button className="bg-green-500 text-white px-4 py-1 rounded-md">
                  Save
                </button>
                <button className="bg-gray-200 text-gray-600 px-4 py-1 rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="bg-white rounded-md divide-y divide-gray-200">
            {[
              "Manage Clinics",
              "Clinic Details",
              "Payment Settings",
              "Prescription Settings",
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 hover:bg-gray-100 ${
                  index === 3 ? "bg-gray-100" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-3/4">
          <h2 className="font-bold text-gray-800 text-xl mb-4">SETTINGS</h2>
          <div className="bg-white rounded-md p-6">
            {/* AI Predictive Search */}
            <div className="mb-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold mb-2">Ai Predictive Search</h3>
                {/* Toggle Switch */}
                <label className="inline-flex items-center cursor-pointer">
                  <span className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={aiPredictiveSearchEnabled}
                      onChange={toggleAiPredictiveSearch}
                    />
                    <span className="toggle-bg block w-12 h-6 bg-gray-400 rounded-full"></span>
                    <span
                      className={`toggle-dot absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-all ${
                        !aiPredictiveSearchEnabled
                          ? "transform translate-x-6 bg-blue-600"
                          : ""
                      }`}
                    ></span>
                  </span>
                </label>
              </div>

              <p className="text-sm text-gray-500">
                The AI search allows you to give predictive analysis based on
                the patient's vitals, examinations, lab, and reports.
              </p>
            </div>

            {/* Prescription Layout */}
            <div>
              <h3 className="font-semibold mb-2">Prescription layout</h3>
              <p className="text-sm text-gray-500 mb-4">
                Choose from the templates available or add your own template.
              </p>

              {/* Template Section */}
              <div className="flex space-x-4">
                <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-md">
                  <button className="flex flex-col items-center text-gray-500">
                    <span className="text-3xl">+</span>
                    <span className="text-sm">Add custom template</span>
                  </button>
                </div>
                <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
                <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
              </div>
            </div>

            {/* Change Link */}
            <div className="mt-4">
              <a
                onClick={handleChangeSubscription}
                className="text-blue-600 hover:underline text-sm"
              >
                Change contents in the prescriptions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
