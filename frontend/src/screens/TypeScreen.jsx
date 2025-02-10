import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Context } from "../main";
import { imglink } from "../assets/assests.js";
import SecNav from "../components/SecNav.jsx";
import Footer from "../components/Footer.jsx";
import "./Sub.css";

export default function TypeScreen() {
  const { User } = useContext(Context);
  const { type } = useParams();
  const { state } = useLocation();
  const nav = useNavigate();
  const { sub } = state;
  return (
    <div>
      <Header User={User} />
      <SecNav />

      <div className="product-list-container">
        <h2 className="product-list-title">{type}</h2>
        <hr className="divider" />

        <div className="product-grid">
          {sub.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header  d-flex justify-content-around">
                <p className="m-0" >{product["SubType"]}</p>
                <button
                  className="view-more-btn"
                  onClick={() =>
                    nav(`/subtype/${type}/${product["SubType"]}`, {
                      state: { subtypes: product["items"] },
                    })
                  }
                >
                  View More
                </button>
              </div>

              <div className="product-content">
                <div className="main-product">
                  <img src={imglink(product["items"][0]["Img"])} alt="" />
                  <p className="product-name">{product["items"][0]["Name"]}</p>
                </div>

                <div className="side-products">
                  {product["items"].slice(1, 3).map((item, index) => (
                    <div key={index} className="side-product">
                      <img src={imglink(item["Img"])} alt="" />
                      <p className="product-name">{item["Name"]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
