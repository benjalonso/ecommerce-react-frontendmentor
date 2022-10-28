import LogoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import React from "react";
import { useState } from "react";
import { NavLink } from "./NavLink";

const MainHeader = () => {
  const [active, setActive] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
  );

  const handleOpenMenu = () => {
    setActive(
      "md: absolute top-0 left-0 flex h-full  w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 z-10"
    );
  };
  const handleCloseMenu = () => {
    setActive(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  return (
    <>
      <header className="container mx-auto flex items-center gap-8  p-4 md:p-0">
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
          <NavLink name={"Collections"} />
          <NavLink name={"Men"} />
          <NavLink name={"Women"} />
          <NavLink name={"About"} />
          <NavLink name={"Contact"} />
        </nav>
        <div className="flex gap-4">
          <button>
            <CartIcon />
          </button>
          <img src={AvatarImage} alt="" className="w-10" />
        </div>
      </header>
      <span className="container mx-auto h-[1px] w-full bg-gray-400 md:block"></span>
    </>
  );
};
export default MainHeader;
