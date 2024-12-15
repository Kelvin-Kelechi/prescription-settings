 

const Profile = () => {
  return (
    <div className="bg-white p-4 rounded-md flex items-center mb-4 shadow-md">
      <img
        src="https://via.placeholder.com/80"
        alt="Profile"
        className="rounded-full w-20 h-20 mr-4"
      />

      <div className="flex-1">
        <span className="text-xs text-white bg-yellow-400 px-2 py-1 rounded-md">
          Super Admin
        </span>
        <p className="font-medium text-lg">Dr. Kim Jones</p>
        <div className="mt-4 space-x-2">
          <button className="bg-[#198E79] text-white px-4 py-1 rounded-md">
            Save
          </button>
          <button className="bg-gray-200 text-gray-600 px-4 py-1 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
