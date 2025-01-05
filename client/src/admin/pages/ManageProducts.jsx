import React from "react";

const ManageProducts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
      <h3>Manage Products</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Product A</td>
            <td>Category 1</td>
            <td>$100</td>
            <td>
              <button className="btn btn-sm btn-primary">Edit</button>
              <button className="btn btn-sm btn-danger ms-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ManageProducts;
