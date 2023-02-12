import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import NavLink from "./NavLink.js";

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuIsOpen);

  }

  return (
    <div className="py-2 bg-black px-10 flex md:hidden w-full fixed top-0">
      <div
        className={`flex flex-col space-y-10 text-center pt-20 mx-auto bg-black h-screen w-screen absolute top-0 right-0 ${
          menuIsOpen ? "translate-x-0" : "translate-x-full opacity-80"
        }  transition-transform duration-700 ease-in-out`}
      >
        <NavLink href="#home" text="HOME" onClick={handleToggleMenu} />
        <NavLink href="#skills" text="SKILLS" onClick={handleToggleMenu} />
        {/* <NavLink href="#" text="WORK" onClick={handleToggleMenu}/> */}
        <NavLink
          href="#contact-mobile"
          text="CONTACT"
          onClick={handleToggleMenu}
        />
      </div>
      <div className="ml-auto">
        <Hamburger toggled={menuIsOpen} onToggle={handleToggleMenu} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
