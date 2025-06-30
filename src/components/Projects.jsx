import { Link } from "react-router-dom";
import ProjectImg1 from "../../public/assets/projects/project1/greenish.png";
import ProjectImg4 from "../../public/assets/projects/project2/voluntree.png";
import ProjectImg7 from "../../public/assets/projects/project3/missionMit.png";
import { HiGlobe } from "react-icons/hi";
import { FaGithub, FaServer } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const projectsData = [
  {
    id: "greenish",
    image: ProjectImg1,
    alt: "Greenish",
    title: "Greenish - Gardening Community Platform",
    description: "A community platform for gardening lovers to connect, share tips, browse content, and explore nearby enthusiasts.",
    features: [
      "Community connection for gardening enthusiasts",
      "Interactive gardening tips & articles",
      "User authentication with Firebase",
    ],
    technologies: "React, Tailwind CSS, Firebase, JavaScript",
    links: {
      live: "https://greenish-9ea31.web.app/",
      client: "https://github.com/UlfathAraIslam/greenish-frontend",
      server: "https://github.com/UlfathAraIslam/greenish-server",
    },
  },
  {
    id: "voluntree",
    image: ProjectImg4,
    alt: "Voluntree",
    title: "Voluntree - Volunteer Management System",
    description: "A responsive volunteer platform for organizations to post needs and users to apply for volunteering.",
    features: [
      "Post & manage volunteer opportunities",
      "Users can apply to be volunteers",
      "Dashboard with volunteer statistics",
    ],
    technologies: "React, Firebase, MongoDB, Tailwind CSS",
    links: {
      live: "https://voluntree-ad593.web.app",
      client: "https://github.com/UlfathAraIslam/voluntree-client",
      server: "https://github.com/UlfathAraIslam/voluntree-server",
    },
  },
  {
    id: "missionmit",
    image: ProjectImg7,
    alt: "Mission MIT",
    title: "Mission MIT - Education Goal Platform",
    description: "An interactive educational roadmap website to track goals, access resources, and stay motivated.",
    features: [
      "Goal tracking and roadmap progress",
      "Educational resource sharing",
      "User-friendly responsive design",
    ],
    technologies: "React, Firebase Auth, Tailwind CSS",
    links: {
      live: "https://mission-mit.web.app/",
      client: "https://github.com/UlfathAraIslam/mission-MIT",
    },
  },
];

const buttonInfo = [
  { key: "live", icon: HiGlobe, label: "Live Site" },
  { key: "client", icon: FaGithub, label: "Client Repository" },
  { key: "server", icon: FaServer, label: "Server Repository" },
];

const Projects = () => {
  return (
    <div name="projects" className="w-full text-gray-300 bg-[#0a192f] py-12">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
          <p className="py-4">Here are some of my recent projects with key features and technologies.</p>
        </div>

        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row items-center gap-8 border border-gray-700 rounded p-4 mb-8">
            <div className="md:w-1/2 h-[300px] overflow-y-auto">
              <img src={project.image} alt={project.alt} className="rounded shadow-lg w-full object-cover" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <ul className="list-disc list-inside mb-3">
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
              <p className="text-pink-600 font-semibold mb-2">Technologies:</p>
              <p className="mb-4">{project.technologies}</p>

              <div className="flex gap-4 flex-wrap mt-4">
                {buttonInfo.map(({ key, icon: Icon, label }) => {
                  const url = project.links[key];
                  if (!url) return null;
                  return (
                    <a key={key} href={url} target="_blank" rel="noreferrer" aria-label={label} title={label}
                      className="border-2 px-4 py-2 rounded hover:bg-pink-600 hover:border-pink-600 flex items-center justify-center">
                      <Icon size={24} />
                    </a>
                  );
                })}

                <Link to={`/project/${project.id}`} title="Details"
                  className="border-2 px-4 py-2 rounded hover:bg-pink-600 hover:border-pink-600 flex items-center justify-center">
                  <AiOutlineInfoCircle size={24} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
