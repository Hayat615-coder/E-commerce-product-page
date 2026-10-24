import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

const Header_component = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 absolute mx-24 py-8 top-0 left-0 w-1/2 h-screen text-black font-bold bg-white z-50">
          <button type="button" onClick={toggleMenu}>
            <img src={close} alt="close-menu" className="w-5 h-5" />
          </button>
          <ul className="flex flex-col gap-4 py-4">
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
      <header className="flex flex-row items-center justify-between mx-24 py-8">
        <div className="flex gap-4">
          <button type="button" onClick={toggleMenu}>
            <img src={menu} alt="Menu" className="flex md:hidden" />
          </button>
          <div className="flex flex-row gap-14 items-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="hidden md:flex flex-row gap-4">
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Men</a>
            </li>
            <li>
              <a href="">Women</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <img src={cart} alt="Cart" className="w-5 h-5" />
          <img src={avatar} alt="Avatar" className="w-10 h-10" />
        </div>
      </header>
    </>
  );
};

export default Header_component;
