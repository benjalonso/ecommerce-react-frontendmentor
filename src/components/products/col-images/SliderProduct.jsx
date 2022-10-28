import { useRef, useState } from "react";
import PreviousIcon from "@/components/icons/PreviousIcon";
import NextIcon from "@/components/icons/NextIcon";
import { useEffect } from "react";

export const SliderProduct = ({
  images = [],
  imagesSmall = [],
  isOpen = false,
  handleClose = null,
  ...props
}) => {
  const [index, setIndex] = useState(0);
  const btnSlider = useRef(null);

  useEffect(() => {
    isOpen && btnSlider.current.classList.remove("md:hidden");
  });

  const handleClickNext = () => {
    if (index === images.length - 1) return setIndex(0);
    setIndex(index + 1);
  };

  const handleClickPrev = () => {
    if (index === 0) return setIndex(images.length - 1);
    setIndex(index - 1);
  };

  return (
    <section {...props}>
      {isOpen && (
        <button onClick={handleClose} className="text-right md:col-span-4">
          X
        </button>
      )}
      <div className="relative col-span-4">
        <img
          src={images[index]}
          alt=""
          className="aspect-[16/12] w-full md:aspect-[16/18] md:rounded-md"
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden"
        >
          <button
            onClick={handleClickPrev}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <PreviousIcon />
          </button>
          <button
            onClick={handleClickNext}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {imagesSmall.map((imgSmall, i) => (
        <div
          onClick={() => {
            setIndex(i);
          }}
          className="relative overflow-hidden rounded-md"
        >
          <img
            key={imgSmall}
            src={imgSmall}
            alt=""
            className="hidden md:block md:rounded-md"
          />
          <span
            className={` absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && " border-2 border-[orange] bg-[rgba(255,255,255,0.5)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};
