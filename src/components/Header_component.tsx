import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import { useState, type MouseEvent } from "react";
import Cart_component, { type CartItem } from "./Cart_component";

type HeaderProps = {
  item: CartItem | null;
  onRemoveItem: () => void;
  onCheckout: () => void;
};

const Header_component = ({ item, onRemoveItem, onCheckout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Women");
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    label: string,
  ) => {
    event.preventDefault();
    setActiveNav(label);
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 absolute px-8 py-8 top-0 left-0 bottom-0 w-2/3 h-100% text-black font-bold bg-white z-50">
          <button type="button" onClick={toggleMenu}>
            <img src={close} alt="close-menu" className="w-5 h-5" />
          </button>
          <ul className="flex flex-col gap-4 py-4">
            {navItems.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(event) => handleNavClick(event, label)}
                  aria-current={activeNav === label ? "page" : undefined}
                  className={
                    activeNav === label ? "text-orange-500" : undefined
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <header className="flex flex-row items-center justify-between mx-24 py-8 border-b border-[hsl(220,14%,75%)]">
        <div className="flex gap-8 items-center">
          <button type="button" onClick={toggleMenu}>
            <img src={menu} alt="Menu" className="flex md:hidden" />
          </button>
          <div className="flex flex-row gap-14 items-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="hidden md:flex flex-row gap-4 text-[hsl(219,9%,45%)]">
            {navItems.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  onClick={(event) => handleNavClick(event, label)}
                  aria-current={activeNav === label ? "page" : undefined}
                  className={`relative after:absolute after:-bottom-8 after:left-0 after:right-0 after:h-1 after:content-[''] ${
                    activeNav === label ? "after:bg-orange-500" : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Toggle cart"
              aria-expanded={isCartOpen}
              className="relative"
            >
              <img src={cart} alt="" className="w-5 h-5" />
              {item && (
                <span className="absolute -right-3 -top-2 rounded-full bg-orange-500 px-2 text-xs font-bold text-white">
                  {item.quantity}
                </span>
              )}
            </button>
            {isCartOpen && (
              <Cart_component
                item={item}
                onRemove={onRemoveItem}
                onCheckout={() => {
                  setIsCartOpen(false);
                  onCheckout();
                }}
              />
            )}
          </div>
          <img src={avatar} alt="Avatar" className="w-10 h-10" />
        </div>
      </header>
    </>
  );
};

export default Header_component;
