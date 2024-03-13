import React, { useRef, useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeSectionCard = ({ data, sectionName }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  useEffect(() => {
    setPrevButtonDisabled(activeIndex === 0);
    setNextButtonDisabled(activeIndex === data.length - 1);
  }, [activeIndex, data.length]);

  const items = data.map((product, i) => (
    <div
      key={i}
      className="w-[15rem] px-2 cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="w-[10rem] h-[13rem]">
        <img className="w-full h-full" src={product.imageUrl} alt="" />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h4 className="text-lg font-medium text-gray-900">{product.brand}</h4>
        <p className="text-sm mt-2 text-gray-500">{product.title}</p>
      </div>
    </div>
  ));

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center font-semibold py-4">{sectionName}</h1>
      <div className="relative w-full flex flex-row justify-center items-center my-4 px-8 sm:px-4 py-4">
        <Button
          variant="contained"
          onClick={handlePrev}
          sx={{ bgcolor: "white" }}
          className="absolute left-6 z-50"
          disabled={isPrevButtonDisabled}
        >
          <ChevronLeftIcon className="text-black" />
        </Button>
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            720: { items: 4 },
            1024: { items: 4 },
          }}
          disableButtonsControls
          disableDotsControls
          onSlideChanged={({ item }) => setActiveIndex(item)}
          ref={carouselRef}
        />
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ bgcolor: "white" }}
          className="absolute right-10 z-50"
          disabled={isNextButtonDisabled}
        >
          <ChevronRightIcon className="text-black" />
        </Button>
      </div>
    </>
  );
};

export default HomeSectionCard;
