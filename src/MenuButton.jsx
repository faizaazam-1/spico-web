import React from "react";
const MenuButton = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-blue-900 lg:text-white text-sm mb-1">MENU</span>
      <div className="flex flex-col space-y-1">
        <div className="w-6 h-0.5 bg-blue-900 lg:bg-white"></div>
        <div className="w-6 h-0.5 bg-blue-900 lg:bg-white"></div>
        <div className="w-6 h-0.5 bg-blue-900 lg:bg-white"></div>
      </div>
    </div>
  );
};

export default MenuButton;
