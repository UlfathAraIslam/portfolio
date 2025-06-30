import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import logoWhite from "../../public/assets/logo-white.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* Logo */}
      <div>
        <img src={logoWhite} className="w-32 h-auto" alt="Logo" />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-6">
  {["home", "about", "skills", "projects", "contact"].map((section) => (
    <li
      key={section}
      className="cursor-pointer transition duration-300 capitalize relative group"
    >
      <Link
        to={section}
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active-link"
        className="hover:text-pink-600 pb-1"
      >
        {section}
      </Link>
      {/* Hover underline only when not active */}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
    </li>
  ))}
  <li>
    <a
      href="resume.pdf"
      download
      className="text-white rounded group border-2 px-3 py-1 flex items-center hover:bg-pink-600 hover:border-pink-600 transition duration-300"
    >
      Download Resume
      <span className="group-hover:rotate-90 duration-300">
        <HiArrowNarrowRight className="ml-2" />
      </span>
    </a>
  </li>
</ul>


      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
        <li className="py-6 text-4xl">
          <a
            href="resume.pdf"
            download
            className="text-white rounded group border-2 px-3 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            Download Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
