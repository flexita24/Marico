const Advertisement = () => {
    return (
      <>
        <div className="text-white text-center">
          <h1 className="font-semibold tracking-normal text-4xl md:text-6xl mt-8 md:mt-12">
            Experts Agree
          </h1>
          <img
            src="/src/assets/Image.png"
            className="pt-8 md:pt-12 px-4 md:px-16 pb-16 md:pb-24 mx-auto"
            alt=""
          />
          <div
            className="bg-[url('/src/assets/Image-5.png')] bg-center bg-cover bg-no-repeat md:h-screen flex items-center justify-center py-6 md:py-12 px-4 md:px-16"
          >
            <h1 className="text-white font-semibold tracking-normal lg:text-6xl md:text-4xl text-center">
              We've helped over 1,000 creatorsre <br /> claim control of their audience.
            </h1>
          </div>
        </div>
      </>
    );
  };
  
  export default Advertisement;
  