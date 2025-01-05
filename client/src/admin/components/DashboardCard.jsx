import React from "react";

const DashboardCard = ({ title, value, bg }) => {
  return (
    <div className="col-md-3">
      <div className={`card text-white bg-${bg}`}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
