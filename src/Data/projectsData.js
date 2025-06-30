import ProjectImg1 from "../../public/assets/projects/project1/greenish.png";
import ProjectImg4 from "../../public/assets/projects/project2/voluntree.png";
import ProjectImg7 from "../../public/assets/projects/project3/missionMit.png";

const projectsData = [
  {
    id: "greenish",
    image: ProjectImg1,
    alt: "Greenish",
    title: "Greenish - Gardening Community Platform",
    description:
      "A community platform for gardening lovers to connect, share tips, browse content, and explore nearby enthusiasts.",
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
    challenges: [
      "Managing user authentication securely with Firebase",
      "Optimizing image upload and storage",
      "Ensuring responsive design across devices",
    ],
    improvements: [
      "Add profile customization features",
      "Enable real-time group discussions",
      "Implement user badges based on activity",
    ],
  },
  {
    id: "voluntree",
    image: ProjectImg4,
    alt: "Voluntree",
    title: "Voluntree - Volunteer Management System",
    description:
      "A responsive volunteer platform for organizations to post needs and users to apply for volunteering.",
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
    challenges: [
      "Handling real-time updates for volunteer status",
      "Securing user data in forms",
      "Building mobile-first responsive UI",
    ],
    improvements: [
      "Add organization profile verification",
      "Provide volunteer certificates via email",
      "Enhance admin dashboard with charts",
    ],
  },
  {
    id: "missionmit",
    image: ProjectImg7,
    alt: "Mission MIT",
    title: "Mission MIT - Education Goal Platform",
    description:
      "An interactive educational roadmap website to track goals, access resources, and stay motivated.",
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
    challenges: [
      "Designing a scalable roadmap structure",
      "Managing user authentication with restricted pages",
      "Balancing educational content and motivation tools",
    ],
    improvements: [
      "Add quiz and interactive games",
      "Enable community goal-sharing",
      "Develop mobile app version",
    ],
  },
];

export default projectsData;
