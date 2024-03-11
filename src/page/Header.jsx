import Button from "../components/Button";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <>
      <header className="text-center mx-auto align-items-center justify-center">
        <Navbar />
        <div className="heading pt-16 lg:pt-32 text-center align-items-center inline-block">
          <h1 className="text-white font-bold text-4xl lg:text-7xl tracking-normal text-center">
            Own your audience.
          </h1>
          <h1
            className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight text-center"
            style={{
              background: "linear-gradient(to right, #FE6783, #FFBF84)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            So you don't lose them.
          </h1>
        </div>
        <div className="pt-8 lg:pt-16">
          <h2 className="text-white font-medium tracking-normal text-center text-2xl lg:text-3xl">
            Turn your audience into email and <br /> text message subscribers.
          </h2>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center gap-4 mt-5 lg:mt-10">
            <Button
              className="py-3 lg:py-5 px-8 lg:px-12"
              text="Get Started Now"
            />
            <Button
              className="bg-transparent border border-gray-700 py-3 lg:py-5 px-8 lg:px-12"
              text="View A Demo"
            />
          </div>
          <div className="flex justify-center items-center gap-2 mt-5 lg:mt-10">
            <p className="h-[22px] w-[22px] rounded-full bg-green-900  ">
              <p className=" ml-1 mt-1  h-[15px] w-[15px] rounded-full bg-green-500"></p>
            </p>

            <p className="text-gray-600 text-lg lg:text-2xl font-normal leading-6 lg:leading-9 tracking-normal text-center flex gap-2">
              <span className="text-white text-lg lg:text-2xl font-bold leading-6 lg:leading-9 tracking-normal text-left">
                1000+
              </span>
              creators have already started
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
