import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";

const projects = [
  {
    name: "Certificate Management System",
    description: "A dynamic platform for generating and verifying certificates with secure QR code validation and institution management.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image: "/certificate.png",
    liveLink: "https://certificate-management-system-iota.vercel.app/",
  },
  {
    name: "Aqeemussalah",
    description: "A professional client project built to streamline operations and enhance digital presence with a focus on performance and UX.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    image: "/salah.png",
    liveLink: "https://aqeemussalah.com/",
  },
  {
    name: "Airbnb Clone",
    description: "A high-fidelity clone of the Airbnb platform featuring property listings, booking simulations, and responsive map integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
    image: "/airbnb.png",
    liveLink: "https://airbnb-clone-sand-six.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work across various domains and technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
