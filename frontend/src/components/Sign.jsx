import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";
import "./spinner.css";

export default function Sign({ ss }) {
  const [isLoading, setIsLoading] = useState(false);
  const { sA, sU } = useContext(Context);
  const [email, se] = useState("");
  const [otp, sotp] = useState("");
  const [name, sname] = useState("");
  const [age, sage] = useState(0);
  const [t, tt] = useState(false);
  const nav = useNavigate();
  const rFo = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (t) {
      console.log(otp);
      if (otp.trim().length !== 6) {
        toast.error("Invalid OTP");
        setIsLoading(false);
        return;
      }
      await axios
        .post(
          "http://localhost:4003/user/sign",
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
          toast.error(error);
        });
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const t = emailRegex.test(email);
      const a = parseInt(age, 10);
      if (t && name.length > 3 && a > 0 && a < 90) {
        await axios
          .post(
            "http://localhost:4003/user/presign",
            { name: name, email: email, age: age },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.data.success) {
              tt(true);
              toast.success(res.data.message);
            } else {
              toast.error(res.data.message);
            }
          })
          .catch((error) => {
            toast.error(error);
          });
      } else {
        if (name.length < 4) {
          toast.warning("Name length is <4");
        }
        if (!t) {
          toast.warning("Invalid Email");
        }
        if (a == 0) {
          toast.warning("Invalid age");
        }
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="d-flex  flex-column justify-content-between bg-light gap-3 p-5 w-50">
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
        <input
          type="text"
          className=" form-control border-1 rounded-0 "
          style={{ outline: "none", background: "none" }}
          placeholder="Name"
          onChange={(e) => sname(e.target.value)}
        />
        <input
          type="email"
          className=" form-control border-1 rounded-0 "
          style={{ outline: "none", background: "none" }}
          placeholder="Email"
          onChange={(e) => se(e.target.value)}
        />
        <input
          type="text"
          className=" form-control border-1 rounded-0 "
          style={{ outline: "none", background: "none" }}
          placeholder="age"
          onChange={(e) => sage(e.target.value)}
        />
        {t ? (
          <input
            type="text"
            className=" form-control border-1 rounded-0 "
            style={{ outline: "none", background: "none" }}
            placeholder="OTP"
            onChange={(e) => sotp(e.target.value)}
          />
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
        <hr />
        <button
          className=" btn "
          style={{ backgroundColor: "orangered" }}
          onClick={rFo}
        >
          {t ? "Verify OTP" : "Request OTP"}
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-2 text-primary align-self-bottom">
        <p className="m-0">Have Account /</p>
        <button
          className="btn bg-none text-primary border-0"
          onClick={() => nav("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
