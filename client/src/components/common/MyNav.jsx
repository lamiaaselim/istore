import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function MyNav() {
  const data = useSelector((state) => state.cartCounter.value);
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary ">
        <div className="container py-2">
          <NavLink className="navbar-brand text-purple fs-4" to="/">
            Istore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fs-6" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6" to="/products">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6 position-relative" to="/cart">
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-purple">
                    {data}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6" to="/sign-up">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
