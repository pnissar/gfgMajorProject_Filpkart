import React, { useContext } from "react";
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import SecNav from "../components/SecNav";
import Footer from "../components/Footer";

export default function Product() {
  const { User } = useContext(Context);
  const { type, sub, id } = useParams();
  const { state } = useLocation();
  const { product } = state;
  console.log(User);
  const addtoCart = async () => {
    await axios
      .post(
        "http://localhost:4003/user/addcart",
        {
          Name: User.name,
          Email: User.email,
          Product: product["_id"],
          volume: 1,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.exu);
          toast.success(res.data.message);
        } else {
          toast.warning(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imglink = (img) => {
    const updatedUrl = img.replace(/\/\d+\/\d+\//, "/928/928/");
    return updatedUrl;
  };
  const c = (str) => {
    if (str == "") return ["N/A"];
    return str.split(",");
  };

  console.log(product);
  return (
    <div>
      <Header />
      <SecNav />
      <div className="container mt-3 d-flex bg-white p-3 justify-content-around gap-3">
        <img
          src={imglink(product["Img"])}
          alt=""
          srcset=""
          style={{
            width: "40%",
            height: "90vh",
            boxShadow: "0 0 10px 0.5px rgba(0, 0, 0, 0.1)",
          }}
        />

        <div className="d-flex flex-column gap-5">
          <h3>{product["Name"]}</h3>
          <h4 className="text-success">Price: {product["Price"]}</h4>
          <ul className="text-secondary">
            {c(product["Description"]).map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary d-flex gap-3 justify-content-center align-items-center "
            onClick={addtoCart}
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
            <p className="m-0 p-2">Add to cart</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
