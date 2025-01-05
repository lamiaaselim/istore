import React from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row g-4">
        <DashboardCard title="Total Products" value="120" bg="primary" />
        <DashboardCard title="Total Orders" value="450" bg="success" />
        <DashboardCard title="Total Users" value="320" bg="info" />
        <DashboardCard title="Revenue" value="$50,000" bg="warning" />{" "}
      </div>
    </div>
  );
};

export default Dashboard;
