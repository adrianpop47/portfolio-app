import { useState, useEffect } from "react";
import arrow from "../assets/images/scroll-arrow.png";
import SocialMediaIcons from "./SocialMediaIcons";

const Header = () => {
  const [contactId, setContactId] = useState("#contact-desktop");

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setContactId("#contact-mobile");
    } else {
      setContactId("#contact-desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center bg-header bg-bottom h-screen"
    >
      <div className="flex flex-col mt-auto text-center">
        <div className="hidden md:block text-black font-workSans lg:text-3xl md:text-2xl font-light">
          Hi there, my name is Adrian and I am a freelance
        </div>
        <div className="md:hidden text-black font-workSans uppercase font-semibold text-4xl pb-10">
          Adrian
        </div>
        <div className="text-white font-oswald uppercase lg:text-9xl md:text-8xl text-6xl drop-shadow-[0_1px_5px_rgba(0,0,0,1)]">
          Software Engineer
        </div>
        <div className="text-black font-oswald uppercase font-bold lg:text-9xl md:text-8xl text-6xl">
          & Web Developer
        </div>
        <SocialMediaIcons className="md:hidden mx-auto pt-10 drop-shadow-[0_1px_5px_rgba(0,0,0,1)] space-x-20" />
      </div>
      <div className="bg-black shadow-md lg:shadow-none shadow-gray-800 px-4 py-2 rounded-xl text-white lg:bg-transparent lg:text-black font-workSans uppercase font-semibold lg:text-2xl md:text-xl mt-20 lg:hover:text-white lg:hover:bg-transparent hover:bg-white hover:text-black">
        <a href={contactId}>Contact me</a>
      </div>
      <div className="mt-auto">
        <img src={arrow} alt="Scroll Arrow" className="w-52 translate-y-7" />
      </div>
    </div>
  );
};
export default Header;
