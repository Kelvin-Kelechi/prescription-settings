import { FaSyncAlt } from "react-icons/fa";

const BreadCrumb = () => {
  return (
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
  );
};

export default BreadCrumb;
