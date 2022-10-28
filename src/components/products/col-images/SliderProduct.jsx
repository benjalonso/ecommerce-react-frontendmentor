import PreviousIcon from "@/components/icons/PreviousIcon";
import NextIcon from "@/components/icons/NextIcon";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProduct1Small from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProduct2Small from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProduct3Small from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProduct4Small from "@/assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const images = [imgProduct1,imgProduct2,imgProduct3,imgProduct4]

export const SliderProduct = () => {

  const [index, setIndex] = useState(0)

  const handleClickNext = () => { 
    if(index === images.length - 1) return setIndex(0)
    setIndex(index+1)
   }
  const handleClickPrev = () => {
    if(index === 0) return setIndex(images.length-1)
    setIndex(index-1)

    }


  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4">
        <img src={images[index]} alt="" className="aspect-[16/12] w-full md:aspect-[16/18] md:rounded-md" />
        <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4">
          <button onClick={handleClickPrev} className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <PreviousIcon />
          </button>
          <button onClick={handleClickNext} className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <NextIcon />
          </button>
        </div>
      </div>
      <img src={imgProduct1Small} alt="" className="hidden md:block md:rounded-md" />
      <img src={imgProduct2Small} alt="" className="hidden md:block md:rounded-md" />
      <img src={imgProduct3Small} alt="" className="hidden md:block md:rounded-md" />
      <img src={imgProduct4Small} alt="" className="hidden md:block md:rounded-md" />
    </section>
  );
};
