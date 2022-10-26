import React from "react";
import { DetailedProduct } from "@/components/products/DetailedProduct";
import { SliderProduct } from "@/components/products/SliderProduct";
const MainProducts = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <SliderProduct/>
      <DetailedProduct/> 
    </main>
  );
};

export default MainProducts;
