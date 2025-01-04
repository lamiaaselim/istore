import React, { Component } from "react";

export default class MySlider extends Component {
  render() {
    return (
      <>
        <div
          style={{ height: "680px" }}
          id="carouselExample"
          className="carousel slide mb-5"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: "680px", backgroundSize: "auto" }}
                src="./assets/images/slide-01.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "680px", backgroundSize: "auto" }}
                src="./assets/images/slide-01.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: "680px", backgroundSize: "auto" }}
                src="./assets/images/slide-01.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
}
