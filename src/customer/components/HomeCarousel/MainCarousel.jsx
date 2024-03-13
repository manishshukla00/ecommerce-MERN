import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const mainCarouselData = [
  {
    Image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nJTIwZWNvbWVyY2UlMjB3ZWJzaXRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1578939662863-5cd416d45a69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwZWNvbWVyY2UlMjB3ZWJzaXRlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const items = mainCarouselData.map((item, i) => {
  return (
    <img
      className="w-full h-[500px] object-center"
      key={i}
      src={item.Image}
      alt=""
    />
  );
});

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    disableDotsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
  />
);

export default MainCarousel;
