import { MdKeyboardArrowLeft, MdRefresh } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="flex sticky top-[72px] w-full items-center px-12 justify-between p-4 border-b bg-white z-10">
      <div className="text-gray-600">
        <span className="text-sm">
          <MdKeyboardArrowLeft size={25} className="inline-block " />{" "}
          <MdKeyboardArrowRight size={25} className="inline-block " />{" "}
          <a href="#" className="hover:underline">
            Home
          </a>{" "}
          <MdKeyboardArrowRight size={25} className="inline-block " />{" "}
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
