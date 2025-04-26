import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function Mainlayout() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="container">
      <Sidebar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
