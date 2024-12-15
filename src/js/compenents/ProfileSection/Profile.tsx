import ProfilePicture from "../../../assets/images/profile-2.png";
const Profile = () => {
  return (
    <div className="bg-white p-4 flex items-center mb-6 pb-12 border-b  ">
      <img
        src={ProfilePicture}
        alt="Profile"
        className="rounded-full w-20 h-20 mr-4 object-cover"
      />

      <div className="flex-1">
        <span className="text-xs text-black bg-yellow-400 px-2 py-2 rounded-md">
          Super Admin
        </span>
        <p className="font-medium mt-4 mb-1 text-lg">Dr. Kim Jones</p>
        <div className="  space-x-2">
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
