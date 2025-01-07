import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
      <div 
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1503342217505-b0a4ec33be42')"
        }}
      >
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Dhruve Demo Store Collection
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Discover the latest trends in modern fashion. Elevate your style with our exclusive collection.
              </p>
              <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-6">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
