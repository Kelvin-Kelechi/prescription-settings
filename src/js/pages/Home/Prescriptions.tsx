 import { FaCamera } from "react-icons/fa";

const Prescriptions = () => {
  return (
    <div className="flex h-screen px-12 bg-white">
      {/* Left Section: Preview */}
      <div className="w-2/4 bg-gray-100 p-6   flex flex-col">
        <h2 className="text-xl font-bold  text-[#A1A1A1] mb-4">
          Preview of the prescription
        </h2>
        <div className="flex-1 border rounded-md bg-gray-200 shadow-lg overflow-hidden p-4">
          <div className="h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Prescription Preview</p>
          </div>
        </div>
      </div>

      {/* Right Section: Settings Form */}
      <div className="w-2/4 bg-white p-6   overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">SETTINGS</h2>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Prescription Contents</h3>
          <p className="text-gray-600">
            Fill in the Clinic details on the prescription
          </p>

          {/* Header Info */}
          <div className="flex justify-between">
            <label className="block text-gray-700 font-medium mb-2">
              Add Clinic Logo
            </label>
            <div className="w-20 h-20 bg-[#F1E7F9] rounded-full flex items-center justify-center cursor-pointer  ">
              <FaCamera size={25} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Doctor's Name
              </label>
              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Doctor's Specialty
              </label>
              <input
                type="text"
                placeholder="e.g. Neurologist"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Other Information
              </label>
              <input
                type="text"
                placeholder="e.g. MBBS"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Footer Info */}
          <h3 className="text-lg font-semibold mt-6">Footer Info</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Clinic Address
              </label>
              <input
                type="text"
                placeholder="Street address, City State, Zip Code"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Clinic Contact
              </label>
              <input
                type="text"
                placeholder="9546695325"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                + Add another Contact
              </p>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Clinic Email
              </label>
              <input
                type="email"
                placeholder="bhallaclinic@gmail.com"
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                + Add another email
              </p>
            </div>

            {/* Clinic Hours */}
            <div>
              <h3 className="text-lg font-semibold mt-6">Clinic Open Hrs</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <label className="block text-gray-700 font-medium mr-2">
                      Start time
                    </label>
                    <input
                      type="number"
                      placeholder="8"
                      className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                    />
                    <span className="mx-2 text-gray-600">hrs</span>
                    <input
                      type="number"
                      placeholder="30"
                      className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                    />
                    <span className="mx-2 text-gray-600">min</span>
                    <button className="px-4 py-2 bg-[#198E79] text-white rounded-md">
                      am
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md ml-2">
                      pm
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <label className="block text-gray-700 font-medium mr-2">
                      End time
                    </label>
                    <input
                      type="number"
                      placeholder="10"
                      className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                    />
                    <span className="mx-2 text-gray-600">hrs</span>
                    <input
                      type="number"
                      placeholder="50"
                      className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                    />
                    <span className="mx-2 text-gray-600">min</span>
                    <button className="px-4 py-2 bg-[#198E79] text-white rounded-md">
                      am
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md ml-2">
                      pm
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Applicable for Days
                </label>
                <div className="flex items-center space-x-2">
                  {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <button
                        key={day}
                        className="px-4 py-2 bg-[#198E79] text-white rounded-md"
                      >
                        {day}
                      </button>
                    )
                  )}
                </div>
                <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                  Add other timings
                </p>
              </div>
            </div>

            {/* Auto Fill Data */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Auto fill data in the Prescription
              </h3>
              <div className="mt-2 space-y-2">
                {[
                  "Patient Id",
                  "Patient Personal details - Name, contact",
                  "Patient Vitals details",
                  "Patient Past history details",
                  "Symptoms and Diagnosis",
                  "Lab Tests",
                  "Drug Prescription",
                ].map((label, index) => (
                  <div key={label} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      defaultChecked={index % 2 === 0} // Alternate checked states for demonstration
                    />
                    <label className="text-gray-700">{label}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-8 flex justify-center">
              <button className="w-[100px] px-6 py-2 bg-[#198E79] text-white text-lg font-medium rounded-md shadow-md hover:bg-green-600">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescriptions;
