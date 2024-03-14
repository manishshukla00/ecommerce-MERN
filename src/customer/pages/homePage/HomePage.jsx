import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCard from "../../components/homeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../data/ecommerce-products-data/Men/men_kurta";
import { sareePage1 } from "../../../data/ecommerce-products-data/Saree/page1";
import { mensShoesPage1 } from "../../../data/ecommerce-products-data/shoes";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <HomeSectionCard data={mens_kurta} sectionName="Mens Kurta" />
      <HomeSectionCard data={mensShoesPage1} sectionName="Mens Shoes" />
      <HomeSectionCard data={mens_kurta} sectionName="Mens Shirt" />
      <HomeSectionCard data={sareePage1} sectionName="Women's Saree" />
      <HomeSectionCard data={sareePage1} sectionName="Women's Dress" />
    </div>
  );
};

export default HomePage;
