import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { imglink } from "../assets/assests.js";
import "./sut.css";
import SecNav from "../components/SecNav.jsx";
import Footer from "../components/Footer.jsx";

export default function SubType() {
  const { state } = useLocation();
  const { subtypes } = state;
  const { type, sub } = useParams();
  console.log(type, sub, subtypes);
  const nav = useNavigate();
  return (
    <div>
      <Header />
      <SecNav />
      
      <div className="container-fluid py-3 px-4">
        <div className="row d-flex justify-content-center bg-white gap-3 g-4">
          <p className="text-secondary ">
            {type} - {sub}
          </p>
          <hr />
          {subtypes.map((product) => (
            <div
              key={product.id}
              className=" col-2 d-flex flex-column justify-content-center align-items-center bg-white border border-1  gap-2 p-0 hover"
              onClick={() =>
                nav(`/prod/${type}/${sub}/${product["_id"]}`, {
                  state: { product: product },
                })
              }
            >
              <img
                src={imglink(product["Img"])}
                className="w-100"
                alt=""
                srcset=""
                style={{ height: "300px" }}
              />
              <div className="w-100 p-2">
                <p
                  className="d-flex overflow-x-scroll w-75 m-0"
                  style={{
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    fontSize: "0.8rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {product["Name"]}
                </p>
                <p
                  className="m-1"
                  style={{
                    fontSize: "0.8rem",
                    alignSelf: "flex-start",
                    fontWeight: "bold",
                  }}
                >
                  {product["Price"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <Footer />
    </div>
  );
}
