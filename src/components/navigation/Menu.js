import SocialMediaIcons from "../SocialMediaIcons.js";
import NavLink from "./NavLink.js";


const Menu = () => {
  return (
    <div className=" py-3 px-20 bg-black hidden justify-center items-center md:flex before:mx-auto">
      <div className="space-x-10 xl:space-x-20">
        <NavLink href="#home" text="HOME"/>
        <NavLink href="#skills" text="SKILLS"/>
        {/* <NavLink href="#" text="WORK"/> */}
        <NavLink href="#contact-desktop" text="CONTACT"/>
      </div>
      <SocialMediaIcons className="ml-auto"/>
    </div>
  );
};

export default Menu;
