import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full border-t mt-10 ">
      <div className="flex lg:mx-20 mx-10 md:text-2xl text-xl py-10">
        <div className="flex space-x-10">
          {/* <CgFacebook /> */}
          <a href="https://www.instagram.com/codewith.adi/">
            <AiFillInstagram />
          </a>
          <a href="https://twitter.com/codewith_adi">
            <FaTwitter />
          </a>
        </div>
        <div className="ml-auto text-sm">&#169;2023 Designed by Adrian Pop</div>
      </div>
    </div>
  );
};

export default Footer;
