import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCard from "../../components/homeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../data/ecommerce-products-data/Men/men_kurta";
import { sareePage1 } from "../../../data/ecommerce-products-data/Saree/page1";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeSectionCard data={mens_kurta} sectionName="Mens Kurta" />
      <HomeSectionCard data={mens_kurta} sectionName="Mens Shoes" />
      <HomeSectionCard data={mens_kurta} sectionName="Mens Shirt" />
      <HomeSectionCard data={sareePage1} sectionName="Women's Saree" />
      <HomeSectionCard data={sareePage1} sectionName="Women's Dress" />
      <Footer />
    </div>
  );
};

export default HomePage;
