import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const goto = () => navigate("/productdetail");
  return (
    <div className="productCard w-[15rem] h-[25rem] mx-2 mb-10 transition-all cursor-pointer hover:shadow-black hover:shadow-2xl">
      <div className="h-[20rem]">
        <img
          onClick={goto}
          className="w-full h-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
        <div className="textPart bg-white p-2">
          <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">₹ {product.discountedPrice}</p>
            <p className="line-through opacity-80">₹ {product.price}</p>
            <p className="text-green-600 font-semibold">
              {product.discountPersent}% off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
