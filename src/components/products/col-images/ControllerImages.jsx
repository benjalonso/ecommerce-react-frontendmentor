import React, { useState } from "react";
import { SliderProduct } from "@/components/products/col-images/SliderProduct";

export const ControllerImages = ({ images, imagesSmall }) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <SliderProduct
        images={images}
        imagesSmall={imagesSmall}
        className="grid md:grid-cols-4 md:gap-4 cursor-pointer"
        onClick={handleOpen}
      />
      {isOpen && (
        <SliderProduct
          isOpen={isOpen}
          images={images}
          handleClose={handleClose}
          imagesSmall={imagesSmall}
          className="grid md:absolute md:top-1/2 md:left-1/2 md:max-w-md md:-translate-y-1/2 md:-translate-x-1/2 md:grid-cols-4 md:gap-4"
        />
      )}
    </>
  );
};
