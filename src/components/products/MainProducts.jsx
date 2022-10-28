import React from "react";
import { DetailedProduct } from "@/components/products/col-detail/DetailedProduct";
import { SliderProduct } from "@/components/products/col-images/SliderProduct";
const MainProducts = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2 md:container mx-auto">
      <SliderProduct />
      <DetailedProduct />
    </main>
  );
};

export default MainProducts;
