import { MdRefresh } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="flex items-center px-12 justify-between p-4 border-b bg-white">
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
      <button className="flex items-center text-black hover:text-gray-800">
        <MdRefresh size={25} className="mr-1" /> Refresh
      </button>
    </div>
  );
};

export default BreadCrumb;
