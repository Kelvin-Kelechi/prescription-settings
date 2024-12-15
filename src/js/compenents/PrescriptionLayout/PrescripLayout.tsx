import React from "react";
import Template from "../../../assets/images/template.png";

 
interface PrescripLayoutProps {
  isModalOpen: boolean;
  closeModal: () => void;
  handleAddTemplateClick: () => void;
  handleAddTemplate: () => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  templates: { id: string; preview: string }[];  
}

const PrescripLayout: React.FC<PrescripLayoutProps> = ({
  isModalOpen,
  handleAddTemplateClick,
  handleAddTemplate,
  handleImageChange,
  closeModal,
  templates,  
}) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Prescription Layout</h3>
      <p className="text-sm text-gray-500 mb-4">
        Choose from the templates available or add your own template with an
        image.
      </p>

      <div className="flex space-x-4">
        <div className="w-32 h-32 bg-gray-100 flex items-center justify-center rounded-md">
          <button
            className="flex flex-col items-center text-gray-500"
            onClick={handleAddTemplateClick}
          >
            <span className="text-3xl">+</span>
            <span className="text-sm">Add custom template</span>
          </button>
        </div>
        {templates.length === 0 ? (
          <div className="w-32 h-32 bg-gray-300 rounded-md p-2 overflow-auto">
            <img
              src={Template}
              alt="Default Template"
              className="w-full h-26 object-cover mb-2"
            />
          </div>
        ) : (
          templates.map((template) => (
            <div
              key={template.id}
              className="w-32 h-32 bg-gray-300 rounded-md p-2 overflow-auto"
              dangerouslySetInnerHTML={{ __html: template.preview }}
            ></div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h4 className="text-lg font-semibold mb-4">Add Custom Template</h4>
            <input
              type="file"
              className="border border-gray-300 p-2 mb-4 w-full rounded-md"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="flex justify-between">
              <button
                className="bg-[#198E79] text-white px-4 py-2 rounded-md"
                onClick={handleAddTemplate}
              >
                Add Template
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrescripLayout;
