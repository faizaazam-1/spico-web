import React from "react";

const TechStack = () => {
  const technologies = [
    { name: "JavaScript", logo: "assets/Copy of Untitled/JsLo.png" },
    { name: "React", logo: "assets/Copy of Untitled/ReactLo.png" },
    { name: "GraphQL", logo: "assets/Copy of Untitled/GraphLo.png" },
    { name: "Ruby", logo: "assets/Copy of Untitled/Rubylo.png" },
    { name: "Vue.js", logo: "assets/Copy of Untitled/VueLo.png" },
    { name: "Rails", logo: "assets/Copy of Untitled/RailsLo.png" },
  ];

  return (
    <div className="w-full">
      <div className="bg-blue-900 h-10 mb-6"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center mb-12">
          <div className="w-12 h-0.5 bg-red-700 mr-4"></div>
          <div className="flex items-center flex-wrap">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mr-2 sm:mr-3">
              Elevating Business Through Elite Technology
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-20">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
