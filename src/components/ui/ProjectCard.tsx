import { ExternalLink, Code2 as Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./Button";

interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  index: number;
}

export const ProjectCard = ({
  name,
  description,
  techStack,
  image,
  liveLink,
  githubLink,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="flex gap-4">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer">
                <Button size="sm" variant="primary" className="h-10 px-4">
                  <ExternalLink size={16} className="mr-2" /> Live Demo
                </Button>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <Button size="sm" variant="secondary" className="h-10 px-4 bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border-none">
                  <Github size={16} className="mr-2" /> Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="text-slate-500 line-clamp-2 leading-relaxed mb-6">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
