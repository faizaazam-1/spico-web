import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white mt-16 pt-12 md:pt-16 lg:pt-20">
      {/* Removed bottom padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-dm text-blue-900 mb-6">
              About
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-dm">
                Spico<span className="font-notos text-red-700">TECH</span>
              </span>
            </h1>

            <div className="text-base md:text-lg lg:text-xl text-blue-900 font-dm space-y-4 mt-8">
              <p>
                Our mission is simple: to transform your digital vision into
                reality. Whether you're a startup looking to make your mark or
                an established enterprise seeking to modernize your online
                presence, we have the expertise and creativity to bring your
                ideas to life.
              </p>
              <p>
                With React, we build lightning-fast, responsive front-end
                interfaces that captivate users and keep them engaged. Our
                mastery of Ruby, particularly Ruby on Rails, allows us to
                develop secure, efficient back-end systems that power complex
                web applications with ease.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <img
                src="assets/AboutusLogo.png"
                alt="About Us"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
