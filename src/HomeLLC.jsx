import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import backgroundVideo from "assets/SpicoTech LLC.mp4";
import logoImage from "assets/SpicoLogo.png";
const NavItem = ({ number, title, href }) => (
  <li className="group text-center">
    <a
      href={href}
      className="flex flex-col items-start text-[#F8FAFC] hover:text-[#61DAFB] transition-colors"
    >
      <span className="text-sm text-[#61DAFB] group-hover:text-[#B91C1C] mb-1">
        {number}
      </span>
      <span className="text-4xl font-light">{title}</span>
    </a>
  </li>
);

const HomeLLC = () => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-[#0F172A]">
      {/* Video Background /}
<video
autoPlay
loop
muted
className="absolute z-0 w-full h-full object-cover opacity-50"
>
<source src={backgroundVideo} type="video/mp4" />
Your browser does not support the video tag.
</video>
{/ Overlay to ensure text is readable */}
      <div className="absolute z-10 inset-0 bg-black bg-opacity-35"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full text-[#F8FAFC]">
        <header className="p-6 flex justify-between items-center">
          <img
            src={logoImage}
            alt="SpicoTech Logo"
            className="h-24 w-auto object-contain"
          />
          <div className="space-x-4">
            <Button
              variant="outline"
              className="text-[#F8FAFC] border-2 bg-transparent border-[#F8FAFC] hover:bg-[#B91C1C] hover:text-[#F8FAFC] hover:border-[#B91C1C] rounded-full my-9 px-6 py-2 text-sm font-medium transition-colors duration-300"
            >
              CAREERS
            </Button>
            <Button
              variant="outline"
              className="text-[#F8FAFC] border-2 bg-transparent border-[#F8FAFC] hover:bg-[#B91C1C] hover:text-[#F8FAFC] hover:border-[#B91C1C] rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
            >
              CONTACT US
            </Button>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center pb-44">
          <nav className="w-full max-w-5xl flex items-center">
            <button className="text-[#F8FAFC] hover:text-[#B91C1C] flex flex-col items-center mr-16 transition-colors duration-300">
              <span className="text-m font-light -ml-80">CLOSE</span>
              <X className="-ml-80" size={50} strokeWidth={1} />
            </button>
            <ul className="flex justify-between items-center flex-grow">
              <NavItem number="01" title="Home" href="/" />
              <NavItem number="02" title="About Us" href="/" />
              <NavItem number="03" title="Products" href="/" />
              <NavItem number="04" title="Investors" href="/" />
              <NavItem number="05" title="Innovation" href="/" />
              <NavItem number="06" title="Events" href="/" />
            </ul>
          </nav>
        </main>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Button className="rounded-full w-20 h-20 bg-transparent border-2 border-white text-[#F8FAFC] hover:bg-[#B91C1C] hover:text-white transition-colors duration-300 flex flex-col items-center justify-center">
            <span className="text-xs">SMART</span>
            <span className="text-base font-semibold">NAV</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomeLLC;
