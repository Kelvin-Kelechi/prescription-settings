import React from 'react'

const PrescripLayout = () => {
  return (
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
  );
}

export default PrescripLayout