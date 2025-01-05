import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="container mt-4">{children}</div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
