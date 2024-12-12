import heroSectionBg from "../../images/bg.svg";

const WhatDifferent = () => {
  return (
    <div className="w-[100%] overflow-hidden h-[90vh] relative">
      <div className="container max-w-[1110px] m-auto">
        <div className="grid grid-cols-12 gap-10">
          <div className="sm:col-span-6 col-span-12 flex flex-col gap-10">
            <h2 className="text-4xl font-bold text-primary-800">
              What's different about Manager?
            </h2>
            <p className="text-primary-400">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="sm:col-span-6 col-span-12">
            <ul className="text-primary-800 flex flex-col gap-12">
              <li className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <h2 className="px-7 py-2 bg-accent-900 text-accent-100 rounded-full">
                    01
                  </h2>
                  <h3 className="text-xl font-bold">
                    Track-company wide progress
                  </h3>
                </div>

                <p className="text-primary-400">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <h2 className="px-7 py-2 bg-accent-900 text-accent-100 rounded-full">
                    02
                  </h2>
                  <h3 className="text-xl font-bold">
                    Track-company wide progress
                  </h3>
                </div>
                <p className="text-primary-400">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>
              <li className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <h2 className="px-7 py-2 bg-accent-900 text-accent-100 rounded-full">
                    03
                  </h2>
                  <h3 className="text-xl font-bold">
                    Track-company wide progress
                  </h3>
                </div>
                <p className="text-primary-400">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest details. Never lose sight of the bigger
                  picture again.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src={heroSectionBg}
        alt=""
        className="absolute  left-[-25rem] z-[-10] bottom-[-20rem]"
      />
    </div>
  );
};

export default WhatDifferent;
