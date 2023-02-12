import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  return (
    <nav className="z-10 shadow-md shadow-gray-800 sticky font-semibold">
      <Menu />
      <HamburgerMenu />
    </nav>
  );
};

export default Navigation;
