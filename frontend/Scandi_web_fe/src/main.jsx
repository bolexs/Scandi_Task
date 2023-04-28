import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/Product";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" exact element={<AddProduct />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
