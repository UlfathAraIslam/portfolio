import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTimes } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className='text-4xl font-bold'>Portfolio</h1>
      </div>
      {/* menu */}
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <li>
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
        </li>
          <li><Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link></li>
            <li>
              <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
            </li>
            <li><Link to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link></li>
            <button className='text-white rounded group border-2 px-1 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <a target="_blank" href="https://drive.google.com/file/d/1tz5JlhmoaeGxgRu99iKGSD6BxfI45jhi/view?usp=sharing">Download
            <br /> Resume</a>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}

      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="home" spy={true} smooth={true} duration={500}>
              Home
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="about" spy={true} smooth={true} duration={500}>
              About
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="skills" spy={true} smooth={true} duration={500}>
              Skills
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="projects" spy={true} smooth={true} duration={500}>
              Projects
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="contact" spy={true} smooth={true} duration={500}>
              Contact
        </Link>
        </li>
        <li className='py-6 text-4xl'>
        <button className='text-white rounded group border-2 px-1 py-1 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <a target="_blank" href="https://drive.google.com/file/d/1tz5JlhmoaeGxgRu99iKGSD6BxfI45jhi/view?usp=sharing">Download
            <br /> Resume</a>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </li>
      </ul>
      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/ulfath-ara-islam-54a54a280/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a target="_blank"
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/UlfathAraIslam'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a 
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1tz5JlhmoaeGxgRu99iKGSD6BxfI45jhi/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;