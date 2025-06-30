/* eslint-disable react/no-unescaped-entities */
import { Typewriter } from 'react-simple-typewriter'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8'>

        {/* Left Side Content */}
        <div>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>
            Ulfath Ara Islam
          </h1>
          <div className='text-3xl sm:text-3xl font-bold text-[#8892b0]'>
            <Typewriter
              words={['I\'m a Front-End Web-Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I'm a front-end web developer with a passion for crafting exceptional user interfaces and engaging user experiences. With a strong foundation in HTML, CSS, JavaScript, and React, I specialize in creating responsive and interactive websites that delight users.
            <br /><br />
            Keeping up with the latest web technologies and industry trends is important to me. I enjoy staying curious and continuously learning new skills to enhance my development capabilities. My goal is to create web experiences that not only meet the functional requirements but also provide a seamless and enjoyable user journey.
          </p>

          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3 ' />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Profile Image */}
        <div className='flex justify-center'>
          <img src={profileImg} alt="Profile" className='rounded-full object-contain border-4 border-pink-600 bg-transparent' />
        </div>

      </div>
    </div>
  );
};

export default Home;
