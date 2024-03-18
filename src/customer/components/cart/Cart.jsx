import React from "react";
import CartItem from "./CartItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item, i) => {
            return <CartItem key={i} />;
          })}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-2 font-semibold">
              <div className="flex justify-between pt-2 text-black">
                <span>Price</span>
                <span>₹ 4697</span>
              </div>
              <div className="flex justify-between pt-2 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹ 3419</span>
              </div>
              <div className="flex justify-between pt-2 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-2 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹ 1278</span>
              </div>
            </div>
            <Link to={"/Checkout"}>
              <Button
                variant="contained"
                fullWidth
                sx={{ marginTop: 4, px: 2, py: 1, bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
