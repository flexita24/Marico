import Button from "../components/Button";

const Step1 = () => {
  return (
    <>
      <div className="text-white pt-10 md:pt-20">
        <div className="mx-auto text-center">
          {/* Step Indicator */}
          <div className="mb-4">
            <span className="text-blue-500 text-2xl font-semibold leading-9 tracking-normal text-left">
              Step 1
            </span>
          </div>

          {/* Heading */}
          <div className="mb-4">
            <h2 className="text-4xl md:text-7xl text-white font-semibold tracking-normal text-center">
              Connect Your Content
            </h2>
            <p className="text-gray-600 text-xl md:text-3xl font-normal pt-4 tracking-normal text-center">
              Bring all of your content together and get a Homepage that <br />
              automatically updates whenever you create anywhere online.
            </p>
          </div>

          {/* Action Button */}
          <div>
            <Button
              className="bg-transparent border border-[#707070] py-3 md:py-5 px-4 md:px-6"
              text="View Available Sources"
            />
          </div>
        </div>
      </div>

      <div className="container w-full pt-[190px] text-white lg:ml-[183px] flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 md:pl-16">
          <h5 className="text-2xl font-semibold mt-6">Your Homepage</h5>
          <h1 className="text-white font-semibold tracking-normal text-[30px] md:text-[75px] mt-4 md:mt-8">
            Your Content.
            <br />
            All in <span className="text-blue-500">One Spot</span>
          </h1>
          <p className="flex text-white text-lg md:text-xl font-normal leading-8 tracking-normal mt-4 md:mt-8 gap-x-3">
            <span className="inline-block w-8 h-8 px-3 py-1 rounded-full bg-[#2D2D2D] text-white text-lg font-medium leading-7 tracking-normal">
              1
            </span>
            Bring all of your content together into one homepage.
          </p>
          <p className="flex text-white text-lg md:text-xl font-normal leading-8 tracking-normal mt-4 md:mt-8 gap-x-3">
            <span className="inline-block w-8 h-8 px-3 py-1 rounded-full bg-[#2D2D2D] text-white text-lg font-medium leading-7 tracking-normal">
              2
            </span>
            Your page automatically updates whenever you create.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 md:mt-16">
            <Button
              className="py-2 md:py-4 px-3 md:px-6 mb-4 md:mb-0 md:mr-4"
              text="Get Started Now"
            />
            <Button
              className="bg-transparent border border-[#707070] py-3 md:py-4 px-4 md:px-6"
              text="View A Demo"
            />
          </div>
        </div>
        <img src="/assets/Screen.png" className="w-full md:w-1/2" alt="" />
      </div>
    </>
  );
};

export default Step1;
