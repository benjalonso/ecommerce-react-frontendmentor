import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import React from "react";
import { useState } from "react";

const MainHeader = () => {
  const [active, setActive] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setActive(
      "md: absolute top-0 left-0 flex h-full  w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };
  const handleCloseMenu = () => {
    setActive(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-4 bg-gray-200 px-4">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo Sneakers"
          className="mr-auto mb-1 h-5 md:mr-0"
        />
        <nav className={active}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <a href="">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
    </>
  );
};
export default MainHeader;
