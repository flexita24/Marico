import Button from "../components/Button";

const Footer = () => {
  return (
    <div className="mt-8 md:mt-32 text-white min-h-screen">
      <div className="flex justify-center items-center p-4">
        <div className="container mx-auto flex justify-center items-center">
          <img
            src="/assets/logo.svg"
            className="w-24 md:w-48 h-24 md:h-48"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center my-8 md:my-16">
        <h1 className="text-white font-bold tracking-normal text-4xl md:text-6xl">
          Get Started Now
        </h1>
        <p className="text-white font-normal tracking-normal mt-2 text-xl md:text-2xl">
          Setup is easy and takes under 5 minutes.
        </p>
        <Button
          className="py-3 md:py-4 mt-4 px-4 md:px-6"
          text="Get Started Now"
        />
        <div className="flex justify-center gap-2 md:gap-4 mt-6 md:mt-10">
          <p className="h-[22px] w-[22px] rounded-full bg-green-900  ">
            <p className=" ml-1 mt-1  h-[15px] w-[15px] rounded-full bg-green-500"></p>
          </p>
          <p className="text-gray-600 text-lg md:text-xl lg:-mt-2 font-normal leading-6 md:leading-8 tracking-normal text-center">
            <span className="text-white font-bold">1000+</span> creators have
            already started
          </p>
        </div>
      </div>
      {/* Additional page sections */}
      <div className="mx-4 md:mx-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 md:space-x-7">
            <div className="block">
              <a
                href="#"
                className="flex items-center gap-2 md:gap-4 py-2 md:py-4 px-2 md:px-4"
              >
                <img
                  className="w-[47px] md:w-16 h-[52px] lg:-mt-16 md:h-16"
                  src="/assets/logo.svg"
                  alt=""
                />
                <span className="text-white font-extrabold tracking-normal text-4xl lg:-mt-6 md:text-3xl">
                  Marico <br />
                  <p className="text-gray-500 font-semibold hover:text-blue-500 text-lg md:text-xl leading-8 lg:ml-1 md:-ml-6">
                    info@marico.co
                  </p>
                </span>
              </a>
            </div>
          </div>
          {/* Navbar items */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-3 md:space-y-0 md:space-x-3">
            <a
              href="#"
              className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Policy
            </a>
            <a
              href="#"
              className="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-[#3C82F4] hover:text-white transition duration-300"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
