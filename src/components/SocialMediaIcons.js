import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import Icon from "./Icon.js"

const SocialMediaIcons = (props) => {
  return (
    <div className={`flex space-x-10 ${props.className}`}>
      {/* <Icon href="#" src={facebook} alt="Facebook Icon" /> */}
      <Icon href="https://www.instagram.com/codewith.adi/"  src={instagram} alt="Instagram Icon" />
      <Icon href="https://twitter.com/codewith_adi" src={twitter} alt="Twitter Icon" />
    </div>
  );
};

export default SocialMediaIcons;
