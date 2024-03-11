import Button from "../components/Button";

const Step3 = () => {
  return (
    <>
      <div className="text-white pt-10 md:pt-20">
        <div className="mx-auto text-center">
          {/* Step Indicator */}
          <div className="mb-4">
            <span className="text-blue-500 text-2xl font-semibold leading-9 tracking-normal text-left">
              Step 3
            </span>
          </div>

          {/* Heading */}
          <div className="mb-4">
            <h2 className="text-4xl md:text-7xl text-white font-semibold tracking-normal text-center">
              Send Emails & Text Messages
            </h2>
            <p className="text-gray-600 text-xl md:text-3xl font-normal pt-4 tracking-normal text-center">
              No more going through a social platform. Reach and engage <br />
              your audience directly over email and text message.
            </p>
          </div>

          {/* Action Button */}
          <div>
            <Button
              className="bg-transparent border border-[#707070] py-4 md:py-6 px-6 md:px-10"
              text="View Available Sources"
            />
          </div>
        </div>
      </div>
      <div className="container justify-center mx-auto items-center px-4 md:pl-10 mt-10 md:mt-20 w-full text-white lg:ml-[183px] flex flex-col md:flex-row">
        <div className="text md:w-1/2">
          <h1 className="lg:text-2xl md:text-4xl font-bold text-left">Create & Share</h1>
          <h1 className="text-white font-semibold tracking-normal lg:text-[70px] text-left text-4xl md:text-7xl mt-4 md:mt-8">
            Reach Your
            <br />
             Audience <span className="text-blue-500">Directly</span>
          </h1>
          <p className="text-white text-lg md:text-xl font-normal leading-8 tracking-normal text-left flex items-center gap-3 mt-4 md:mt-8">
            <span className="w-[33px] h-[33px] md:w-12 md:h-12 px-3 py-1 rounded-full flex align-items-center justify-center bg-[#2D2D2D] text-white text-lg md:text-xl font-medium leading-7 md:leading-8 tracking-normal">
              1
            </span>
            Embed content or create something new to share.
          </p>
          <p className="text-white text-lg md:text-xl font-normal leading-8 tracking-normal text-left flex items-center pt-2 md:pt-4 gap-3">
            <span className="w-[33px] h-[33px] md:w-12 md:h-12 px-3 py-1 rounded-full flex align-items-center justify-center bg-[#2D2D2D] text-white text-lg md:text-xl font-medium leading-7 md:leading-8 tracking-normal">
              2
            </span>
            Share content over email, text message or your homepage.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-8 md:mt-16">
            <Button
              className="py-4 md:py-6 px-6 md:px-10"
              text="Get Started Now"
            />
            <Button
              className="bg-transparent border border-[#707070] py-4 md:py-6 px-6 md:px-10"
              text="View A Demo"
            />
          </div>
        </div>
        <img src="/public/Screen (1).png" className="mt-8 md:mt-0" width={820} height={591} alt="" />
      </div>
    </>
  );
};

export default Step3;
