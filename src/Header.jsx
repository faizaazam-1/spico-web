import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
//import { useNavigate } from "react-router-dom"; // If you're using React Router

const Header = () => {
  // const navigate = useNavigate(); // If you're using React Router

  // const handleMenuClick = () => {
  //   // Navigate to the menu page
  //   navigate("/menu"); // Replace '/menu' with your actual menu page route
  // };

  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        {/* Replace with your actual logo */}
        <img src="/path-to-your-logo.png" alt="NETSOL" className="h-8 w-auto" />
        <h1 className="ml-4 text-2xl font-bold">Innovation</h1>
      </div>
      <Button
        variant="ghost"
        size="icon"
        // onClick={handleMenuClick}
        className="w-10 h-10 border-none focus:outline-none"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  );
};

export default Header;
