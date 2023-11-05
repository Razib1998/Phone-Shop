import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
      <div className="max-w-[1300px] mx-auto mt-2">
        <Navbar></Navbar>
        <div className="py-10">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default MainLayout;