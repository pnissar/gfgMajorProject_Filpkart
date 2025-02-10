import { createContext, StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import "./index.css";

export const Context = createContext({
  isA: false,
  sA: () => {},
  User: false,
  sU: () => {},
  Products: [],
  sP: () => {},
  Cart: [],
  sC: () => {},
});
const AppWrapper = () => {
  const [isA, sA] = useState(false);
  const [User, sU] = useState(false);
  const [Products, sP] = useState([]);
  const [Cart, sC] = useState([]);
  useEffect(() => {
    const ischek = async () => {
      try {
        const res = await axios.get("http://localhost:4003/user/me", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        if (res.data.success) {
          sA(true);
          sU(res.data.decoded);
          toast.info(res.data.message);
        } else {
          toast.error(res.data.message);
          sA(false);
          sU(false);
        }
      } catch (error) {
        toast.error(error);
      }
    };

    ischek();
  }, []);
  useEffect(() => {
    const products = async () => {
      try {
        const res = await axios.get("http://localhost:4003/user/products", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        if (res.data.success) {
          sP(res.data.groupedData);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    products();
  }, []);

  return (
    <Context.Provider value={{ isA, sA, User, sU, Products, sP, Cart, sC }}>
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
