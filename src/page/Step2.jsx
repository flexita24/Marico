import Button from "../components/Button";

const Step2 = () => {
  return (
    <>
      <div className="mx-auto text-center pt-10 md:pt-20">
        <div className="mb-4">
          <span className="text-blue-500 text-2xl font-semibold leading-9 tracking-normal text-left">
            Step 2
          </span>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl md:text-7xl text-white font-semibold tracking-normal text-center">
            Share Your Homepage
          </h2>
          <p className="text-[#707070] text-xl md:text-3xl font-normal pt-4 tracking-normal text-center">
            Share your Wavium homepage link with your followers, and <br />
            we'll handle the rest.
          </p>
        </div>
      </div>
      <div className="container w-full px-4 md:px-10 pt-16 md:pt-32 flex flex-col md:flex-row gap-4 md:gap-8 text-white justify-center mx-auto items-center">
        <div className="box bg-[#0D0D0D] w-full md:w-[854px] h-[auto] md:h-[666px] pt-4 md:pt-8 relative">
          <div className="box-text px-4 md:px-12">
            <p className="text-green-600 text-xl md:text-3xl leading-10 font-normal tracking-normal text-left">
              One Link
            </p>
            <h1 className="text-[#919191] pt-4 md:pt-16 font-semibold tracking-normal text-left text-4xl md:text-7xl">
              All You Create.
              <br />
              <span className="text-white">One Link</span>
            </h1>
          </div>
          <img
            src="/public/Mobile.png"
            className="lg:mt-32 md:mt-16 mx-auto lg:ml-[104px] md:ml-0 md:mr-8 overflow-hidden"
            alt=""
          />
        </div>
        <div className="box bg-[#0D0D0D] w-full md:w-[854px] h-[auto] md:h-[666px] pt-4 md:pt-8 relative">
          <div className="box-text px-4 md:px-12">
            <p className="text-green-600 text-xl md:text-3xl leading-10 font-normal tracking-normal text-left">
              Collect Subscribers
            </p>
            <h1 className="text-[#919191] pt-4 md:pt-16 font-semibold tracking-normal text-left text-4xl md:text-7xl">
              Emails. <br /> Phone #s.
              <br />
              <span className="text-white">All Yours</span>
            </h1>
          </div>
        </div>
      </div>
      <Button text="Get Started" className="flex mt-4 md:mt-8 py-2 md:py-5 px-4 md:px-6 mx-auto" />
    </>
  );
};

export default Step2;
