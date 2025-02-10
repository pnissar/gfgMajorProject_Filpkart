import React, { useContext, useState } from "react";
import Login from "../components/Login";
import Otp from "../components/Otp";
import Sign from "../components/Sign";
import { Navigate } from "react-router-dom";
import { Context } from "../main";

export default function SignIN() {
  const { isA } = useContext(Context);
  if (isA) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="w-100  d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
        <div
          className="d-flex justify-content-center h-75 "
          style={{ boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
        >
          <div
            className="w-50 h-auto bg-primary p-4 "
            style={{
              backgroundImage:
                "url('https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          >
            <h2 className="text-white">Login</h2>
            <p className="text-break text-light-emphasis fs-6 mt-4">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <Sign />
        </div>
      </div>
    </>
  );
}
