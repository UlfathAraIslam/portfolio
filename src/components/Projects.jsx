/* eslint-disable react/no-unescaped-entities */
import ProjectImg1 from "../assets/skills-img/project_img1.png";
import ProjectImg2 from "../assets/skills-img/project_img2.png";
import ProjectImg3 from "../assets/skills-img/project_img3.png";
import ProjectImg4 from "../assets/skills-img/project_img4.png";
import ProjectImg5 from "../assets/skills-img/project_img5.png";
import ProjectImg6 from "../assets/skills-img/project_img6.png";
import ProjectImg7 from "../assets/skills-img/project_img7.png";
import ProjectImg8 from "../assets/skills-img/project_img8.png";
import ProjectImg9 from "../assets/skills-img/project_img9.png";
import Carousel from "./Carousel";

const Projects = () => {
  const projectImages1 = [ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4];
  const projectImages2 = [ProjectImg5, ProjectImg6, ProjectImg7];
  const projectImages3 = [ProjectImg8, ProjectImg9];

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 https://effortless-rolypoly-944a41.netlify.app/images/projects1.pnggap-4 gap-5 ">
          {/* project 1 */}
          <div className="flex flex-col gap-2 border rounded">
            <Carousel
              images={projectImages1}
              demoLink="https://greenish-9ea31.web.app/"
              serverLink="https://github.com/UlfathAraIslam/greenish-server"
              clientLink="https://github.com/UlfathAraIslam/greenish-frontend"
              target="_blank"
            />
            <div className="p-4">
              <p>
                A community platform for gardening lovers to connect, share
                tips, browse gardening content, and explore fellow green thumbs
                near them.
              </p>
              <p className="text-pink-600">Technologies: </p>
              <ul>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Firebase Auth</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>

          {/* ------------------------------- */}
          {/* toy project */}

          <div className="flex flex-col gap-2 border rounded">
            <Carousel
              images={projectImages2}
              demoLink="https://toy-market-place-7c9b9.web.app/add-toy"
              serverLink="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-UlfathAraIslam"
              clientLink="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-UlfathAraIslam"
              target="_blank"
            />
            <div className="p-4">
              <p>
                It's an educational toy's responsive website. users can add toy
                and see all selected toys. they can add toy to database by
                filling up add toy form.{" "}
              </p>
              <p className="text-pink-600">Technologies: </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>FIREBASE</li>
                <li>MONGODB</li>
              </ul>
            </div>
          </div>

          {/* ------------- camp project */}
          <div className="flex flex-col gap-2 border rounded">
            <Carousel
              images={projectImages3}
              demoLink="https://chef-recipe-hunter-assig-3eecf.web.app/"
              serverLink="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-UlfathAraIslam"
              clientLink="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-UlfathAraIslam"
              target="_blank"
            />
            <div className="p-4">
              <p>
                JLLS is a online classes responsive project where students can
                select their classes after login.
              </p>
              <p className="text-pink-600">Technologies: </p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>REACT</li>
                <li>FIREBASE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
