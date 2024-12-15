import React, { useState } from "react";

import Profile from "../../compenents/ProfileSection/Profile";
import PrescripLayout from "../../compenents/PrescriptionLayout/PrescripLayout";
import Prescription from "./Prescriptions";

const UserProfile: React.FC = () => {

  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [aiPredictiveSearchEnabled, setAiPredictiveSearchEnabled] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [templateImage, setTemplateImage] = useState<File | null>(null);
  const [templates, setTemplates] = useState<any[]>([]);
  const handleAddTemplateClick = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
const handleAddTemplate = () => {
  if (templateImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newTemplate = {
        id: templates.length + 1,
        image: reader.result as string,
        isFullHeight: templates.length % 2 === 0, // Alternate between h-full and h-32
        preview: `<div>
                    <img src="${reader.result}" alt="Template Image" class="${
          templates.length % 2 === 0 ? "h-full" : "h-32"
        } w-full object-cover mb-2" />
                  </div>`,
      };
      setTemplates([...templates, newTemplate]);
      setTemplateImage(null);
      closeModal();
    };
    reader.readAsDataURL(templateImage);
  }
};

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   if (e.target.files && e.target.files[0]) {
     setTemplateImage(e.target.files[0]);
   }
 };

  const handleChangeSubscription = () => {
    setShowPrescriptions(true);
  };

  const toggleAiPredictiveSearch = () => {
    setAiPredictiveSearchEnabled((prev) => !prev);
  };

  if (showPrescriptions) {
    return <Prescription templates={templates} />;
  }

  return (
    <div className="bg-white min-h-screen px-4 text-gray-800 font-sans">
      <div className="p-8 flex space-x-8">
        <div className="w-2/4 border-t border-l">
          <Profile />

          <div className="bg-white rounded-md   divide-gray-200">
            {[
              "Manage Clinics",
              "Clinic Details",
              "Payment Settings",
              "Prescription Settings",
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full mb-2 bg-[#F5F5F5] text-left px-4 py-3 hover:bg-[#EBEBEB] ${
                  index === 3 ? "bg-[#EBEBEB]" : ""
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
                    <span className="toggle-bg block w-12 h-6 bg-[#EEEEEE] rounded-full"></span>
                    <span
                      className={`toggle-dot absolute top-0 left-0 w-6 h-6 bg-white rounded-full transition-all ${
                        !aiPredictiveSearchEnabled
                          ? "transform translate-x-6 bg-[#5351C7]"
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

            <PrescripLayout
              templates={templates}
              isModalOpen={isModalOpen}
              handleImageChange={handleImageChange}
              handleAddTemplateClick={handleAddTemplateClick}
              handleAddTemplate={handleAddTemplate}
              closeModal={closeModal}
            />

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
