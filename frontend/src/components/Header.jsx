import React, { useContext } from "react";
import { Context } from "../main.jsx";
import Logo from "../assets/flipcart.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { User, sA, sU } = useContext(Context);
  console.log(User);
  const handleLogout = async () => {
    await axios
      .get("http://localhost:4003/user/logout", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.info(res.data.message);
        sA(false);
        sU(false);
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const nav = useNavigate();
  return (
    <div className="  w-100 bg-primary p-3 text-white">
      <div className="d-flex  gap-5 align-items-center justify-content-center">
        <div className="ms-5">
          <a href="/">
            <img
              width="75"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="Flipkart"
              title="Flipkart"
              class="W5mR4e"
            />
          </a>
          <a
            class="text-white d-block text-decoration-none gap-1"
            href="/plus"
            style={{ fontSize: "0.6rem" }}
          >
            Explore{" "}
            <span class="s4NJ5L" style={{ color: "gold", fontWeight: "bold" }}>
              Plus
            </span>
            <img
              width="10"
              className="ms-1"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
            />
          </a>
        </div>

        <div className="nav-item w-50 d-flex border-0 rounded-1 bg-primary-subtle p-2 align-items-center gap-3">
          <svg
            className="z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search text-black"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-75 outline-none border-0 bg-primary-subtle"
            style={{ outline: "none" }}
          />
        </div>

        <div className="d-flex gap-2 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div class="dropdown text-white">
            <button
              class="btn btn-white text-white btn-outline-none dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {User.name}
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button">
                  {User.email}
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Age:{User.age}
                </button>
              </li>
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="d-flex gap-2 align-items-center"
          onClick={() => nav(`/cart`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>

          <h6 className="m-0">Cart</h6>
        </div>
      </div>
    </div>
  );
}
