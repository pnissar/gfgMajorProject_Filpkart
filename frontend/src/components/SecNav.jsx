import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../main.jsx";
import logoss from "../assets/assests.js";
import { useNavigate } from "react-router-dom";

export default function SecNav() {
  const nav=useNavigate();
  const { Products } = useContext(Context);
  return (
    <div className="d-flex justify-content-between m-3 bg-white p-3">
      {Products.map((products) => (
        <div className="d-flex flex-column align-items-center" onClick={()=>nav(`/type/${products["Types"]}`,{state:{sub:products["SubTypes"]}})} >
          <img key={products.id} src={logoss[products["Types"]]} alt="" style={{width:"65px",height:"55px"}} />
          <h6 key={products.id}>{products["Types"]}</h6>
        </div>
      ))}
    </div>
  );
}
