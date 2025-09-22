import React from "react";
import "./MobileMenu.css";
import { Link, useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      // Clear any saved session data if needed
      localStorage.clear();
      sessionStorage.clear();

      // Refresh and redirect
      window.location.href = "/";
    }
  };

  return (
    <div className="py-3 d-flex justify-content-center ">
      <div className="m-menu text-white">
        <div className="d-flex justify-content-between align-items-center px-4 py-1">
          <Link to={"add-services"}>
            <span className="material-icons-outlined">rule</span>
            <span id="menutext">Add Update Menu</span>
          </Link>

          <Link to={"schedules-professional"}>
            <span className="material-icons-outlined">published_with_changes</span>
            <span id="menutext">Orders</span>
          </Link>

          <Link to={"/dashboard"}>
            <span className="material-icons-outlined">person</span>
            <span id="menutext">Profile</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-transparent border-0 text-white d-flex flex-column align-items-center"
          >
            <span className="material-icons-outlined">logout</span>
            <span id="menutext">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
