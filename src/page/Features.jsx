const Features = () => {
    return (
      <>
        {/* Features */}
        <div className="pt-10 md:pt-20">
          <h1 className="text-4xl md:text-7xl text-white font-semibold tracking-normal text-center">
            Why Creators Love Marico
          </h1>
          <div className="space-y-6 md:space-y-0 md:flex md:justify-around md:pt-10">
            {/* Feature 1 */}
            <div className="text-center md:w-1/3">
              <div className="mb-2 flex flex-col items-center md:gap-2">
                <div className="flex gap-2">
                <img className="w-10 h-10" src="/assets/Smile_emoji.png" alt="" />
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  Reduced Anxiety
                </h3></div>
                <p className="text-gray-600 text-lg md:text-xl font-normal leading-8 tracking-normal">
                  Never worry about losing your audience.
                </p>
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="text-center md:w-1/3">
              <div className="mb-2 flex flex-col items-center md:gap-2">
              <div className="flex gap-2">
                <img className="w-10 h-10" src="/assets/Happy_emoji.png" alt="" />
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  Lower Workload
                </h3>
                </div>
                <p className="text-gray-600 text-lg md:text-xl font-normal leading-8 tracking-normal">
                  Just share one link. We'll handle the rest.
                </p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="text-center md:w-1/3">
              <div className="mb-2 flex flex-col items-center md:gap-2">
              <div className="flex gap-2">
                <img className="w-10 h-10" src="/assets/Party_emoji.png" alt="" />
                <h3 className="text-2xl md:text-4xl font-semibold text-white">
                  More Time
                </h3>
                </div>
                <p className="text-gray-600 text-lg md:text-xl font-normal leading-8 tracking-normal">
                  Spend less time on marketing tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;
  