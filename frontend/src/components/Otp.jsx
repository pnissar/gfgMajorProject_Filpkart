import React, { useState } from "react";
export default function ({ e, st }) {
  const [ot, stp] = useState("");

  return (
    <div className="d-flex  flex-column justify-content-between bg-light gap-3 p-5 w-50">
      <div className="d-flex flex-column">
        <input
          type="email"
          className=" form-control border-0 rounded-0 "
          style={{ outline: "none", background: "none" }}
          placeholder="Email"
          onChange={(e) => stp(e.target.value)}
        />
        <hr />
        <button
          className=" btn "
          style={{ backgroundColor: "orangered" }}
        
        >
          Verify OTP
        </button>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-2 text-primary align-self-bottom">
        <p className="m-0">No Account /</p>
        <button className="btn bg-none text-primary border-0">Sign-Up</button>
      </div>
    </div>
  );
}
