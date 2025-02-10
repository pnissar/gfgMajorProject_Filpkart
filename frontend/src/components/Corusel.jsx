import React from "react";

export default function Corusel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/a6d74b7e7af9bcdc.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/3f976ca32ddc651e.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f8dae5ce006b7d54.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/2f9905cc4b67c99c.jpg?q=80"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/766ea612e03ff01d.jpg?q=20"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
