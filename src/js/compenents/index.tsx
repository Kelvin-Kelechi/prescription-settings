import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

const IndexPage = () => {
  return (
    <div className="w-full flex h-screen overflow-hidden">
      <div className="">
        {" "}
        <Sidebar />
      </div>
      <div className="flex-1 h-full overflow-x-hidden flex flex-col transition-all duration-300 ease-in-ou">
        <Header />
        <BreadCrumb />
        <div className="relative bg-white mb-10 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
