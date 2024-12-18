// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { validateEmail } from "../utils/validateEmail";

export default function Signup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login successful:", formData);
      navigate("/");
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="py-5 text-center text-success"> Welcome in IStore</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className={`form-control ${error.email ? "is-invalid" : ""}`}
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && (
                <div className="invalid-feedback">{error.email}</div>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`form-control ${error.password ? "is-invalid" : ""}`}
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error.password && (
                <div className="invalid-feedback">{error.password}</div>
              )}
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-outline-purple">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
