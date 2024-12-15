import React, { useState } from "react";

 
import Profile from "../../compenents/ProfileSection/Profile";
import PrescripLayout from "../../compenents/PrescriptionLayout/PrescripLayout";
import Prescription from "./Prescriptions";

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

  if (showPrescriptions) {
    return <Prescription />;
  }

  return (
    <div className="bg-white min-h-screen px-4 text-gray-800 font-sans">
      <div className="p-8 flex space-x-8">
        <div className="w-2/4">
          <Profile />

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

        <div className="w-3/4">
          <h2 className="font-bold text-gray-800 text-xl mb-4">SETTINGS</h2>
          <div className="bg-white rounded-md p-6">
            <div className="mb-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-semibold mb-2">Ai Predictive Search</h3>

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

            <PrescripLayout />

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
