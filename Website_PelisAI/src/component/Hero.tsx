import React from "react";

function Hero() {
  return (
    <>
      <div className="hero h-screen py-20 px-8">
        <div className="grid mx-auto px-6 grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center text-center md:text-left ">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">AI-Powered Skin Disease Detection</h2>
            <p className="text-gray-700 text-lg mt-4 text-muted-foreground">
              Get instant analysis of skin conditions using our advanced AI technology. Upload a photo or use your camera for quick and accurate detection.
            </p>
            <div className="mt-10 ">
              <button className="bg-[#2960EB] w-[300px]  text-white font-semibold p-4 rounded-2xl hover:bg-[#4a77eb]">
                Get Started <i className="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <img src="\hero1.png" alt="" className="w-[450px]" />
          </div>
        </div>
      </div>

      <div className="px-8 ">
        <div className="text-3xl font-semibold flex justify-center my-10">Common Skin Conditions</div>
      </div>
    </>
  );
}

export default Hero;
