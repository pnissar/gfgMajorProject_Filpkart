import { useState } from "react";
import SignIN from "./screens/SignIN";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogIn from "./screens/LogIn.jsx";
import TypeScreen from "./screens/TypeScreen.jsx";
import SubType from "./screens/SubType.jsx";
import Product from "./screens/Product.jsx";
import Cr from "./screens/Cr.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/type/:type" element={<TypeScreen />} />
        <Route path="/subtype/:type/:sub" element={<SubType />} />
        <Route path="/prod/:type/:sub/:id" element={<Product />} />
        <Route path="/cart" element={<Cr />} />
      </Routes>
      <ToastContainer theme="colored" />
    </BrowserRouter>
  );
}

export default App;
