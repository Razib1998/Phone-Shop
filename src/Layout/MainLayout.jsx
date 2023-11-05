import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";


const MainLayout = () => {

   const location = useLocation();
   console.log(location)

   useEffect(() => {
     document.title = `Phone ${location.pathname.replace("/", "-")}`;
   }, [location.pathname]);
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