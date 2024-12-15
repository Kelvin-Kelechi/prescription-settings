import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Template from "../../../assets/images/template.png";
interface Template {
  id: string;
  preview: string;
}
const Prescriptions = ({ templates }: { templates: Template[] }) => {
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecialty, setDoctorSpecialty] = useState("");
  const [doctorOthers, setDoctorOthers] = useState("");
  const [clinicAddress, setClinicAddress] = useState("");
  const [clinicContact, setClinicContact] = useState("");
  const [clinicEmail, setClinicEmail] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [clinicHours, setClinicHours] = useState<
    { startTime: string; endTime: string; days: string[] }[]
  >([]);

  const [timeInputs, setTimeInputs] = useState([
    {
      startHour: "",
      startMinute: "",
      startPeriod: "am",
      endHour: "",
      endMinute: "",
      endPeriod: "pm",
      selectedDays: [] as string[],
    },
  ]);

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const toggleDaySelection = (day: string, index: number) => {
    const updatedInputs = [...timeInputs];
    updatedInputs[index].selectedDays = updatedInputs[
      index
    ].selectedDays.includes(day)
      ? updatedInputs[index].selectedDays.filter((d) => d !== day)
      : [...updatedInputs[index].selectedDays, day];
    setTimeInputs(updatedInputs);
  };

  const togglePeriod = (
    period: string,
    setPeriod: (period: string) => void
  ) => {
    setPeriod(period === "am" ? "pm" : "am");
  };

  const handleAddTiming = () => {
    setTimeInputs([
      ...timeInputs,
      {
        startHour: "",
        startMinute: "",
        startPeriod: "am",
        endHour: "",
        endMinute: "",
        endPeriod: "pm",
        selectedDays: [],
      },
    ]);
  };

  const handleRemoveTiming = (index: number) => {
    const updatedInputs = timeInputs.filter((_, idx) => idx !== index);
    setTimeInputs(updatedInputs);
  };

  const handleClear = () => {
    setTimeInputs([
      {
        startHour: "",
        startMinute: "",
        startPeriod: "am",
        endHour: "",
        endMinute: "",
        endPeriod: "pm",
        selectedDays: [],
      },
    ]);
  };

  const isSaveEnabled = timeInputs.some(
    (input) =>
      input.startHour.trim() &&
      input.endHour.trim() &&
      input.startMinute.trim() &&
      input.endMinute.trim() &&
      input.selectedDays.length > 0
  );
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex h-screen px-12 bg-white">
      <div className="w-2/4 bg-gray-100 p-6   flex flex-col">
        <h2 className="text-xl font-bold  text-[#A1A1A1] mb-4">
          Preview of the prescription
        </h2>
        <div className="flex-1   rounded-md   overflow-hidden p-2">
          <div className="h-full bg-gray-200 flex items-center justify-center">
            {templates.length === 0 ? (
              <img
                src={Template}
                alt="Prescription Preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              templates.map((template) => (
                <div
                  key={template.id}
                  className={`w-full   object-cover rounded-md`}
                  dangerouslySetInnerHTML={{ __html: template.preview }}
                ></div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="w-2/4 bg-white p-6   overflow-y-auto">
        <h2 className="text-xl font-bold  ">SETTINGS</h2>
        <hr className="border-spacing-4 border-black" />
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Prescription Contents</h3>
          <p className="text-gray-600">
            Fill in the Clinic details on the prescription
          </p>
          <h3 className="text-md font-semibold text-[#777777] mt-6">
            Header Info
          </h3>

          <div className="flex justify-between">
            <label className="block mt-4 text-gray-700 font-medium mb-2">
              Add Clinic Logo
            </label>
            <div className="w-20 h-20 bg-[#F1E7F9] rounded-full flex items-center justify-center cursor-pointer relative">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Clinic Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FaCamera size={25} />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
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
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
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
                value={doctorSpecialty}
                onChange={(e) => setDoctorSpecialty(e.target.value)}
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
                value={doctorOthers}
                onChange={(e) => setDoctorOthers(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <h3 className="text-md font-semibold text-[#777777] mt-6">
            Footer Info
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Clinic Address
              </label>
              <input
                type="text"
                placeholder="Street address, City State, Zip Code"
                value={clinicAddress}
                onChange={(e) => setClinicAddress(e.target.value)}
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
                value={clinicContact}
                onChange={(e) => setClinicContact(e.target.value)}
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
                value={clinicEmail}
                onChange={(e) => setClinicEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-blue-500 text-sm mt-2 cursor-pointer">
                + Add another email
              </p>
            </div>

            <div>
              <h3 className="text-md font-semibold my-6">Clinic Open Hours</h3>

              {timeInputs.map((input, index) => (
                <div key={index} className="space-y-4 mb-6">
                  <span className="text-gray-700 font-medium ">Time</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <label className="block text-gray-700 font-medium mr-2">
                        Start time
                      </label>
                      <input
                        type="number"
                        placeholder="8"
                        value={input.startHour}
                        onChange={(e) => {
                          const updatedInputs = [...timeInputs];
                          updatedInputs[index].startHour = e.target.value;
                          setTimeInputs(updatedInputs);
                        }}
                        className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                      />
                      <span className="mx-2 text-gray-600">hrs</span>
                      <input
                        type="number"
                        placeholder="30"
                        value={input.startMinute}
                        onChange={(e) => {
                          const updatedInputs = [...timeInputs];
                          updatedInputs[index].startMinute = e.target.value;
                          setTimeInputs(updatedInputs);
                        }}
                        className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                      />
                      <span className="mx-2 text-gray-600">min</span>
                      <button
                        className={`px-4 py-2 rounded-md ${
                          input.startPeriod === "am"
                            ? "bg-[#198E79] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() =>
                          togglePeriod(input.startPeriod, (period) => {
                            const updatedInputs = [...timeInputs];
                            updatedInputs[index].startPeriod = period;
                            setTimeInputs(updatedInputs);
                          })
                        }
                      >
                        am
                      </button>
                      <button
                        className={`px-4 py-2 rounded-md ml-2 ${
                          input.startPeriod === "pm"
                            ? "bg-[#198E79] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() =>
                          togglePeriod(input.startPeriod, (period) => {
                            const updatedInputs = [...timeInputs];
                            updatedInputs[index].startPeriod = period;
                            setTimeInputs(updatedInputs);
                          })
                        }
                      >
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
                        value={input.endHour}
                        onChange={(e) => {
                          const updatedInputs = [...timeInputs];
                          updatedInputs[index].endHour = e.target.value;
                          setTimeInputs(updatedInputs);
                        }}
                        className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                      />
                      <span className="mx-2 text-gray-600">hrs</span>
                      <input
                        type="number"
                        placeholder="50"
                        value={input.endMinute}
                        onChange={(e) => {
                          const updatedInputs = [...timeInputs];
                          updatedInputs[index].endMinute = e.target.value;
                          setTimeInputs(updatedInputs);
                        }}
                        className="w-14 bg-gray-100 border border-gray-300 rounded-md shadow-sm p-2 text-center"
                      />
                      <span className="mx-2 text-gray-600">min</span>
                      <button
                        className={`px-4 py-2 rounded-md ${
                          input.endPeriod === "am"
                            ? "bg-[#198E79] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() =>
                          togglePeriod(input.endPeriod, (period) => {
                            const updatedInputs = [...timeInputs];
                            updatedInputs[index].endPeriod = period;
                            setTimeInputs(updatedInputs);
                          })
                        }
                      >
                        am
                      </button>
                      <button
                        className={`px-4 py-2 rounded-md ml-2 ${
                          input.endPeriod === "pm"
                            ? "bg-[#198E79] text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() =>
                          togglePeriod(input.endPeriod, (period) => {
                            const updatedInputs = [...timeInputs];
                            updatedInputs[index].endPeriod = period;
                            setTimeInputs(updatedInputs);
                          })
                        }
                      >
                        pm
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-2">
                      Applicable for Days
                    </label>
                    <div className="flex items-center space-x-2">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day}
                          className={`px-4 py-2 rounded-md ${
                            input.selectedDays.includes(day)
                              ? "bg-[#198E79] text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                          onClick={() => toggleDaySelection(day, index)}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {timeInputs.length === 1 && (
                <div className="flex justify-between mt-6">
                  <button
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={handleAddTiming}
                  >
                    Add other timings
                  </button>
                  <button
                    className="text-gray-800 text-sm cursor-pointer"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
              )}
              {timeInputs.length > 1 && (
                <div className="flex justify-between mt-6">
                  <button
                    className="text-blue-500 text-sm cursor-pointer"
                    onClick={handleAddTiming}
                  >
                    Add other timings
                  </button>
                  <button
                    className="text-red-500 text-sm cursor-pointer"
                    onClick={() => handleRemoveTiming(timeInputs.length - 1)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <h3 className="text-md font-semibold text-[#777777] mt-6">
              Body Info
            </h3>
            <div className="mt-6">
              <h3 className="text-md font-semibold">
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
                      defaultChecked={index % 2 === 0}
                    />
                    <label className="text-gray-700">{label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              {" "}
              <button
                className={`w-[100px] flex justify-center px-6 py-2 text-lg font-medium rounded-md shadow-md ${
                  isSaveEnabled
                    ? "bg-[#198E79] text-white hover:bg-green-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isSaveEnabled}
              >
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
