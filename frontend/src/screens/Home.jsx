import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../main.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Headers from "../components/Header.jsx";
import logoss from "../assets/assests.js";
import SecNav from "../components/SecNav.jsx";
import Corusel from "../components/Corusel.jsx";
import Types from "../components/Types.jsx";
import Footer from "../components/Footer.jsx";
import "./Hom.css";

export default function Home() {
  const { isA, User, sA, sU, Products, sP } = useContext(Context);
  const nav = useNavigate();

  if (isA === false) {
    return <Navigate to={"/login"} />;
  }

  const imglink = (img) => {
    const updatedUrl = img.replace(/\/\d+\/\d+\//, "/428/428/");
    return updatedUrl;
  };
  return (
    <div>
      <Headers User={User} />
      <SecNav />
      <Corusel />

      <div className="container py-5">
        {Products.map((products) => (
          <div key={products.id} className="mb-5">
          
            <h2 className="text-dark fw-bold mb-4">{products["Types"]}</h2>

            
            <div
              className="d-flex overflow-x-auto gap-5 px-3 pb-4"
              style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            >
              {products["SubTypes"].map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-2 shadow rounded d-flex flex-column align-items-center"
                  style={{ width: "450px", minWidth: "450px" }}
                >
                 
                  <h4
                    className="mb-3 text-primary text-center"
                    style={{ width: "380px" }}
                  >
                    {product["SubType"]}
                  </h4>

                  <div
                    className="d-flex border rounded overflow-hidden"
                    style={{ width: "400px" }}
                  >
                   
                    <div
                      className="border-end p-4 d-flex flex-column align-items-center"
                      style={{ width: "250px" }}
                    >
                      <img
                        src={imglink(product["items"][0]["Img"])}
                        alt=""
                        className="img-fluid rounded"
                        style={{
                          height: "250px",
                          width: "230px",
                          objectFit: "cover",
                        }}
                      />
                      <p
                        className="mt-3 text-center text-truncate fw-bold"
                        style={{ width: "230px" }}
                      >
                        {product["items"][0]["Name"]}
                      </p>
                    </div>

                   
                    <div className="d-flex flex-column justify-content-between">
                      <div
                        className="border-bottom p-3 text-center"
                        style={{ width: "140px" }}
                      >
                        <img
                          src={imglink(product["items"][1]["Img"])}
                          alt=""
                          className="img-fluid rounded"
                          style={{
                            height: "120px",
                            width: "130px",
                            objectFit: "cover",
                          }}
                        />
                        <p
                          className="mt-2 text-truncate fw-bold"
                          style={{ width: "130px" }}
                        >
                          {product["items"][1]["Name"]}
                        </p>
                      </div>
                      <div
                        className="p-3 text-center"
                        style={{ width: "140px" }}
                      >
                        <img
                          src={imglink(product["items"][2]["Img"])}
                          alt=""
                          className="img-fluid rounded"
                          style={{
                            height: "120px",
                            width: "130px",
                            objectFit: "cover",
                          }}
                        />
                        <p
                          className="mt-2 text-truncate fw-bold"
                          style={{ width: "130px" }}
                        >
                          {product["items"][2]["Name"]}
                        </p>
                      </div>
                    </div>
                  </div>

                 
                  <button
                    className="btn btn-outline-primary mt-3 px-4"
                    onClick={() =>
                      nav(
                        `/subtype/${products["Types"]}/${product["SubType"]}`,
                        {
                          state: { subtypes: product["items"] },
                        }
                      )
                    }
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>


            <hr className="mt-5" style={{ borderWidth: "4px" }} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
