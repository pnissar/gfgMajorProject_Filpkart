import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../components/Header";
import SecNav from "../components/SecNav";

export default function Cr() {
  const { User, sC,Cart } = useContext(Context);

  useEffect(() => {
    const p = async () => {
      if (!User || !User.email) return;
      try {
        const res = await axios.post(
          "http://localhost:4003/user/cart",
          { Email: User.email },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.data.success) {
          sC(res.data.cart);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        toast.error("Failed to fetch cart");
      }
    };

    p();
  }, []);
  console.log(Cart);

  return (
    <div>
      <Header />
      <SecNav />
      Hello
    </div>
  );
}
