import Navbar from "../Navbar/Navbar";
import heroSectionBg from "../../images/bg.svg";
import heroSectionMainImg from "../../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-[100%] overflow-hidden pt-12">
      <Navbar />
      <div className="container m-auto max-w-[1110px] grid sm:grid-cols-12 lg:gap-10 gap-0 h-[100vh] items-center">
        <div className="sm:col-span-6 flex flex-col items-start lg:gap-y-10 gap-y-2 order-2 md:order-1">
          <h1 className="text-primary-800 lg:text-5xl text-3xl lg:text-start text-center font-bold ">
            Bring everyone together to build better products.
          </h1>
          <p className="text-primary-400 lg:text-start text-center ">
            Manage makes it simple for software teams to plan day-to-day while
            keeping the larger teams goals in view.{" "}
          </p>
          <button className="bg-accent-900 text-accent-100  px-7 py-3 rounded-full shadow">
            Get Started
          </button>
        </div>
        <div className="sm:col-span-6 order-1 md:order-2">
          <img src={heroSectionMainImg} alt="hero section image" />
        </div>
      </div>
      <img
        src={heroSectionBg}
        alt="bg-hero"
        className="absolute lg:right-[-12rem] lg:top-[-15rem] right-[-8rem] top-[-10rem] z-[-10]"
      />
    </div>
  );
};

export default Hero;
