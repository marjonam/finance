import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Mainlayout() {
  return (
    <div className="container">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Mainlayout;
