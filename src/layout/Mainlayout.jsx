import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";
import BottomNavigation from "../components/BottomNavigation";

function Mainlayout() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="container">
      <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <BottomNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
