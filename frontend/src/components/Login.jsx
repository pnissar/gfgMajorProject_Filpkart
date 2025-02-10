import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../main";
import "./spinner.css";

export default function Login({ ss }) {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, sotp] = useState("");
  const [email, ste] = useState("");
  const [t, st] = useState(true);
  const { sA, sU } = useContext(Context);
  const echange = () => {
    st(true);
    ste("");
    sotp("");
  };
  const nav = useNavigate();
  const check = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (t) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const tt = emailRegex.test(email);

      if (!tt) {
        toast.error("Invalid email");
        setIsLoading(false);
        return;
      }

      console.log(email);

      await axios
        .post(
          "http://localhost:4003/user/prelogin",
          { email: email },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            st(false);
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      if (otp.trim().length !== 6) {
        toast.error("Invalid OTP");
        setIsLoading(false);
        return;
      }
      console.log(otp);
      await axios
        .post(
          "http://localhost:4003/user/login",
          { email: email, otp: otp },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            sA(true);
            sU(res.data.exu);
            nav("/");
            toast.info(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    }
    setIsLoading(false);
  };
  return (
    <div className="d-flex  flex-column justify-content-between bg-light gap-3 p-5 w-50">
      <div className="d-flex flex-column justify-content-center  align-items-center gap-2">
        <input
          type="email"
          className=" form-control border-1 rounded-0 "
          style={{ outline: "none", background: "none" }}
          placeholder={t ? "Email" : "OTP"}
          onChange={
            t ? (e) => ste(e.target.value) : (e) => sotp(e.target.value)
          }
          value={t ? email : otp}
        />
        {!t ? (
          <button
            className="btn bg-none text-primary border-0 "
            style={{ alignSelf: "flex-start" }}
            onClick={echange}
          >
            Change Email
          </button>
        ) : null}
        {isLoading ? (
          <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
            <circle
              class="pl__ring pl__ring--a"
              cx="120"
              cy="120"
              r="105"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 660"
              stroke-dashoffset="-330"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--b"
              cx="120"
              cy="120"
              r="35"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 220"
              stroke-dashoffset="-110"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--c"
              cx="85"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
            <circle
              class="pl__ring pl__ring--d"
              cx="155"
              cy="120"
              r="70"
              fill="none"
              stroke="#000"
              stroke-width="20"
              stroke-dasharray="0 440"
              stroke-linecap="round"
            ></circle>
          </svg>
        ) : null}
        <hr className="w-100" />

        <button
          className=" btn w-100"
          style={{ backgroundColor: "orangered" }}
          onClick={check}
        >
          {t ? "Request OTP" : "Verify OTP"}
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-2 text-primary align-self-bottom">
        <p className="m-0">No Account /</p>
        <button
          className="btn bg-none text-primary border-0"
          onClick={() => nav("/signin")}
        >
          Sign-Up
        </button>
      </div>
    </div>
  );
}
