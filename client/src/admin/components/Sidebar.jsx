import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Toggle Button */}
      <button
        className="btn btn-primary m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSidebar"
        aria-controls="offcanvasSidebar"
      >
        Show Sidebar
      </button>

      {/* Offcanvas Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Admin Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/admin/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/products" className="nav-link">
                Manage Products
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/orders" className="nav-link">
                Manage Orders
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin/users" className="nav-link">
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
