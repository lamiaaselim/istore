import React from "react";

const ManageOrders = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h3>Manage Orders</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>$300</td>
                <td>Pending</td>
                <td>
                  <button className="btn btn-sm btn-success">
                    Mark as Shipped
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
