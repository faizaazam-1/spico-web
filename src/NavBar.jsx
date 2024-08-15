import MenuButton from "./MenuButton";
const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <img
            src="assets/Untitled design (9).png"
            alt="Spico Logo"
            className="h-12 w-12 sm:h-16 sm:w-16 mr-2 sm:mr-4"
          />
          <span className="text-blue-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-notos">
            SpicoTech
          </span>
        </div>
        <div className="block lg:hidden scale-125 sm:scale-150 font-notos">
          <MenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
