import React from "react";
import Navbar from "./NavBar";
import MenuButton from "./MenuButton";

const NewHome = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow relative">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="assets/WHERE INNOVATION MEETS IMPLEMENTATION (2).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* MenuButton positioned independently for large screens */}
          <div className="hidden lg:block scale-150 absolute top-1/2 left-10 transform -translate-y-1/2 z-20 font-notos">
            <MenuButton />
          </div>

          <div className="absolute inset-0 flex items-center z-10">
            <div className="text-white px-4 sm:px-8 md:px-16 lg:px-36 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-notos mb-3 leading-tight">
                WHERE INNOVATION
                <br />
                MEETS
                <br />
                IMPLEMENTATION:
                <br />
                YOUR DIGITAL
                <br />
                JOURNEY STARTS
                <br />
                HERE
              </h1>
              <p className="text-lg sm:text-xl md:text-xl italic font-light">
                Innovate. Create. Elevate.
                <br />
                Your tech partner for every stage
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewHome;
