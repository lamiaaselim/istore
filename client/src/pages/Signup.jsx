import React, { useState } from "react";
import { useNavigate } from "react-router";
import { validateEmail } from "../utils/validateEmail";
import { registerUser } from "../API/authService";
import ErrorAlert from "../components/common/ErrorAlert";

export default function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password, username } = formData;
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
    }
    if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await registerUser(formData);
        // console.log("Signup successful:", response);
        navigate("/login");  // Redirect to login page after successful registration
      } catch (err) {
        setError({ general: err.message });
        // console.error(err);
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="py-5 text-center text-purple">Welcome to IStore</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit} noValidate>
            {/* Username Field */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className={`form-control ${error.username ? "is-invalid" : ""}`}
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
              {error.username && <div className="invalid-feedback">{error.username}</div>}
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${error.email ? "is-invalid" : ""}`}
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && <div className="invalid-feedback">{error.email}</div>}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${error.password ? "is-invalid" : ""}`}
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error.password && <div className="invalid-feedback">{error.password}</div>}
            </div>

            {/* General Error */}
            {error.general && <div className="text-danger">{error.general}</div>}

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-outline-purple">Sign Up</button>
            </div>
          </form>
        </div>
      </div>

       {/* Display error alert */}
       {error.general && (
        <ErrorAlert title="Error" text={error.general} icon="error" />
      )}
    </div>
  );
}
