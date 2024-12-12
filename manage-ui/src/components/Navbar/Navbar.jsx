import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="lg:p-0 px-3">
      <div className="container max-w-[1110px] m-auto flex justify-between  items-center text-primary-800">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-accent-900 text-accent-100  px-7 py-3 rounded-full shadow">
            Get Started
          </button>
        </div>
        <div className="lg:hidden block">
          <img src={hamburger} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
