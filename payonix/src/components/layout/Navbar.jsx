import Button from "../ui/Button";
import { navLinks } from "../../data/navData";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-indigo-400">Payonix</h1>
        <div className="flex gap-12">
            <ul className="hidden md:flex items-center gap-8 text-white/70">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="text-white hover:text-indigo-300 transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:block">Get a Quote</Button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
