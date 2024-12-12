import React from "react";
import avatar1 from "../../images/avatar-ali.png";
import avatar2 from "../../images/avatar-anisha.png";
import avatar3 from "../../images/avatar-richard.png";

const Testimonials = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-primary-800 text-center mt-[-8rem]">
        What they've said?
      </h2>
      <div className="grid grid-cols-12 gap-10 mt-20 text-primary-800">
        <div className="bg-accent-100 sm:col-span-4 col-span-12 p-5">
          <div className="flex justify-center mt-[-3rem]">
            <img src={avatar1} alt="avatar1" className="w-20" />
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center justify-center">
            <h3 className="text-xl font-bold">Track-company wide progress</h3>
            <p className="text-primary-400 text-center">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="bg-accent-100 sm:col-span-4 col-span-12 p-5">
          <div className="flex justify-center mt-[-3rem]">
            <img src={avatar2} alt="avatar1" className="w-20" />
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center justify-center">
            <h3 className="text-xl font-bold">Track-company wide progress</h3>
            <p className="text-primary-400 text-center">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
        <div className="bg-accent-100 sm:col-span-4 col-span-12 p-5">
          <div className="flex justify-center mt-[-3rem]">
            <img src={avatar3} alt="avatar1" className="w-20" />
          </div>
          <div className="mt-10 flex flex-col gap-5 items-center justify-center">
            <h3 className="text-xl font-bold">Track-company wide progress</h3>
            <p className="text-primary-400 text-center">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button className="bg-accent-900 text-accent-100  px-7 py-3 rounded-full shadow">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
