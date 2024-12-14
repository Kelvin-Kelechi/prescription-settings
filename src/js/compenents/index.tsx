import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="w-full flex h-screen overflow-hidden">
      <div className="">
        {" "}
        <Sidebar />
      </div>
      <div className="flex-1 h-full overflow-x-hidden flex flex-col transition-all duration-300 ease-in-ou">
        <Header />
        <div className="relative bg-[#1B1C2D] mb-10 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
