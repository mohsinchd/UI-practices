import footerBg1 from "../../images/bg-desktop.svg";
import socialIcon1 from "../../images/icon-facebook.svg";
import socialIcon2 from "../../images/icon-instagram.svg";
import socialIcon3 from "../../images/icon-pinterest.svg";
import socialIcon4 from "../../images/icon-twitter.svg";
import socialIcon5 from "../../images/icon-youtube.svg";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="bg-accent-900 text-accent-100 relative">
        <img
          src={footerBg1}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <div className="container max-w-[1110px] m-auto relative z-10">
          <div className="grid grid-cols-12 h-44">
            <div className="col-span-6 flex items-center flex-col justify-center">
              <h2 className="text-3xl font-bold">
                Simplify how your team works today.
              </h2>
            </div>

            <div className="col-span-6 flex items-center justify-end">
              <button className="text-accent-900 bg-accent-100 px-7 py-3 rounded-full shadow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-900 h-52 text text-accent-100 py-10">
        <div className="container m-auto max-w-[1110px] h-full">
          <div className="grid grid-cols-12 h-full">
            <div className="col-span-4 h-full">
              <div className="flex flex-col justify-between h-full">
                <h1 className="text-3xl">manage</h1>
                <div className="flex gap-4">
                  <a href="#">
                    <img src={socialIcon1} alt="" />
                  </a>
                  <a href="#">
                    <img src={socialIcon2} alt="" />
                  </a>
                  <a href="#">
                    <img src={socialIcon3} alt="" />
                  </a>
                  <a href="#">
                    <img src={socialIcon4} alt="" />
                  </a>
                  <a href="#">
                    <img src={socialIcon5} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-between">
                <div>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="flex gap-2 justify-end">
                  <input
                    className="p-3 rounded-full"
                    type="text"
                    placeholder="Updates in your inbox..."
                  />
                  <button className="bg-accent-900 text-accent-100 px-5 rounded-full">
                    Go
                  </button>
                </div>
                <div>
                  <p className="text-end text-primary-400">
                    Copyright 2020, all rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
