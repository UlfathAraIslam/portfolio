/* eslint-disable react/no-unescaped-entities */
import { HiArrowNarrowRight } from "react-icons/hi";
import profileImg from "../../public/assets/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] flex items-center">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side Content */}
        <div>
          <p className="text-pink-600">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-200">
            Ulfath Ara Islam 
          </h1>
          <h1 className="text-4xl text-[#ccd6f6]">I love the process of turning ideas into web application.</h1>

          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I'm a passionate full-stack web developer with experience using React.js, Node.js, Next.js, and TailwindCSS. I also have skills in UI/UX design, allowing me to create visually appealing web applications.
          </p>

          {/* Resume + Social Icons Row */}
          <div className="flex flex-col flex-wrap gap-4">

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ulfath-ara-islam-54a54a280/"
                className="text-gray-300 hover:text-pink-600 text-2xl"
              >
                <FaLinkedin size={42} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/UlfathAraIslam"
                className="text-gray-300 hover:text-pink-600 text-2xl"
              >
                <FaGithub  size={42} />
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-gray-300 hover:text-pink-600 text-2xl"
              >
                <BsFillPersonLinesFill  size={42} />
              </a>
            </div>
            {/* Resume Button */}
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded">
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </a>

          </div>
        </div>

        {/* Right Side Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full object-contain border-4 border-pink-600 bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
