import React from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full">
      <nav className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl border border-gray-100 px-6 py-3 w-[95%] md:w-[85%] lg:w-[75%] flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:block">
            Caasosal
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-600 hover:text-black font-medium text-sm transition-colors relative group"
            >
              {link}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons / Cart */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group">
            <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full animate-in zoom-in duration-200">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[80px] w-[90%] bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5 duration-200">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 font-medium p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
