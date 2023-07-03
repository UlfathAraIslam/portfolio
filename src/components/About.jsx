import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <animated.p className='text-4xl font-bold inline border-b-4 border-pink-600' style={fadeProps}>
              About
            </animated.p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <animated.p style={fadeProps}>
              Hi. I'm a front-end web developer.
              Please take a look around.
            </animated.p>
          </div>
          <div>
            <animated.p style={fadeProps}>
              I am passionate about building responsive and user-friendly websites that provide exceptional user experiences. With expertise in HTML, CSS, and JavaScript, I specialize in creating visually appealing and interactive web applications.
            </animated.p>
            <animated.p style={fadeProps}>
              My goal is to bring ideas to life by crafting clean and elegant code, implementing modern design principles, and staying up-to-date with the latest web technologies. Whether it's developing a single-page application or optimizing website performance, I strive for excellence in every project.
            </animated.p>
            <animated.p style={fadeProps}>
              From collaborating with designers to implementing pixel-perfect designs, I enjoy the process of transforming concepts into fully functional websites. I believe in continuous learning and staying curious, as the field of front-end development is constantly evolving.
            </animated.p>
            <animated.p style={fadeProps}>
              If you are seeking a skilled front-end web developer who is passionate about creating impactful digital experiences, I would love to discuss how I can contribute to your project or team.
            </animated.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
