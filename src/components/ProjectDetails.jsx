import { useParams, Link } from "react-router-dom";
import { HiGlobe } from "react-icons/hi";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import projectsData from "../Data/projectsData"; // You can extract your projects array into a separate file

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-[#0a192f] text-gray-300 p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-pink-600 underline">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-300 p-8 mx-auto">
      <h1 className="text-4xl font-bold border-b-4 border-pink-600 inline mb-6">{project.title}</h1>

      <div className="flex flex-col md:flex-row gap-8 my-8">
        <div className="md:w-1/2">
          <img src={project.image} alt={project.alt} className="rounded shadow-lg w-full" />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-pink-600">Technology Stack</h2>
          <p>{project.technologies}</p>

          <h2 className="text-2xl font-semibold text-pink-600">Brief Description</h2>
          <p>{project.description}</p>

          <div className="flex gap-4 mt-4 flex-wrap">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer"
                className="border-2 px-4 py-2 rounded hover:bg-pink-600 flex items-center gap-2">
                <HiGlobe /> Live Site
              </a>
            )}
            {project.links.client && (
              <a href={project.links.client} target="_blank" rel="noreferrer"
                className="border-2 px-4 py-2 rounded hover:bg-pink-600 flex items-center gap-2">
                <FaGithub /> GitHub Client
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.challenges?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Potential Improvements & Future Plans</h2>
          <ul className="list-disc list-inside space-y-1">
            {project.improvements?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Link to="/" className="inline-flex items-center gap-2 mt-10 border-2 px-4 py-2 rounded hover:bg-pink-600">
        <FaArrowLeft /> Back to Home
      </Link>
    </div>
  );
};

export default ProjectDetails;
