import React from "react";

const ManageUsers = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-1 text-center">
          <h3>Manage Users</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jane Doe</td>
                <td>jane@example.com</td>
                <td>User</td>
                <td>
                  <button className="btn btn-sm btn-warning">
                    Change Role
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

export default ManageUsers;
