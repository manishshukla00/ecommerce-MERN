import React from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Basic Tee 6-Pack</p>
          <p className="opacity-70">size: L,White</p>
          <p>Seller: Crishtaliyo 2fashion</p>
          <div className="flex items-center space-x-2 pt-2">
            <p className="font-semibold">₹ 799</p>
            <p className="line-through opacity-80">₹ 2499</p>
            <p className="text-green-600 font-semibold">68% off</p>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton color="">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">4</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <Button sx={{ color: "RGB(145 85 253)" }}>remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
