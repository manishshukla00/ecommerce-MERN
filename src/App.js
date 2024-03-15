import React from "react";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Product from "./customer/components/Product/Product";
import Footer from "./customer/components/Footer/Footer";
import ProductDetails from "./customer/components/productDetail/ProductDetails";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/productdetail" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
