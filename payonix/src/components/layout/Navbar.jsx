import { useState } from "react";
import Button from "../ui/Button";
import { navLinks } from "../../data/navData";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-400">
          Payonix
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8 text-white/70">
            {navLinks.map((link, i) => (
              <li key={i} className="relative group">
                <a
                  href={link.href}
                  className="text-white transition"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <Button>Get a Quote</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/80 backdrop-blur border-t border-white/10 px-6 py-6">
          <ul className="flex flex-col gap-5 text-white/80">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-indigo-400 transition"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <Button className="mt-4 w-full">Get a Quote</Button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
