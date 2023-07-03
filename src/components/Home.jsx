import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ulfath Ara Islam
        </h1>
        <div className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
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
  I'm a front-end web developer with a passion for crafting exceptional user interfaces and engaging user experiences. With a strong foundation in HTML, CSS, and JavaScript, React, I specialize in creating responsive and interactive websites that delight users.
  <br/><br/>
  Keeping up with the latest web technologies and industry trends is important to me. I enjoy staying curious and continuously learning new skills to enhance my development capabilities. My goal is to create web experiences that not only meet the functional requirements but also provide a seamless and enjoyable user journey.
</p>

        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;







