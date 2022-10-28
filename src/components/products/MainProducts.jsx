import React from "react";
import { DetailedProduct } from "@/components/products/col-detail/DetailedProduct";
import { ControllerImages } from "@/components/products/col-images/ControllerImages";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg";

const images = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const imagesSmall = [
  imgProduct1Small,
  imgProduct2Small,
  imgProduct3Small,
  imgProduct4Small,
];
const MainProducts = () => {
  return (
    <main className="mx-auto grid grid-cols-1 items-center gap-8 md:container md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <ControllerImages images={images} imagesSmall={imagesSmall} />
      <DetailedProduct />
    </main>
  );
};

export default MainProducts;
