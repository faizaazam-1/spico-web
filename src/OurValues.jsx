// src/components/CoreValuesSection.jsx
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { coreValues } from "/src/coreValues.js";

const CoreValueCard = ({ value, isHovered, onHover, onLeave }) => {
  return (
    <Card
      className="relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out h-80"
      onMouseEnter={() => onHover(value.id)}
      onMouseLeave={onLeave}
    >
      <div
        className={`p-6 h-full flex flex-col items-center justify-center transition-transform duration-300 ${
          isHovered ? "-translate-y-full" : ""
        }`}
      >
        <img src={value.logo} alt={value.title} className="w-36 h-36 mb-6" />
        <h3 className="text-2xl font-notos text-blue-900 text-center">
          {value.title}
        </h3>
      </div>
      <div
        className={`absolute inset-0 p-6 bg-red-700 text-white transition-transform duration-300 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="text-2xl pt-4 text-center font-notos mb-4">
          {value.title}
        </h3>
        <p className="text-md text-center font-dm">{value.description}</p>
      </div>
    </Card>
  );
};

const CoreValuesSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-5xl font-notos text-blue-900 text-center mb-12">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value) => (
          <CoreValueCard
            key={value.id}
            value={value}
            isHovered={hoveredId === value.id}
            onHover={setHoveredId}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValuesSection;
