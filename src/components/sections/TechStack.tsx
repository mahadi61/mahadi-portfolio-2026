import { motion } from "framer-motion";
import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  BookOpen
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
  {
    title: "Frontend",
    icon: <Layout className="text-blue-500" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
    color: "blue"
  },
  {
    title: "Backend",
    icon: <Server className="text-emerald-500" />,
    skills: ["Node.js", "Express.js", "JWT Auth", "REST APIs", "Socket.io"],
    color: "emerald"
  },
  {
    title: "Databases",
    icon: <Database className="text-amber-500" />,
    skills: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
    color: "amber"
  },
  {
    title: "Tools",
    icon: <Wrench className="text-purple-500" />,
    skills: ["Git", "Figma", "Netlify", "Vercel", "Firebase Console", "Postman"],
    color: "purple"
  },
  {
    title: "Learning",
    icon: <BookOpen className="text-rose-500" />,
    skills: ["AI/ML", "React Native", "Python", "Explainable AI"],
    color: "rose"
  }
];

export const TechStack = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Core Tech Stack" 
          subtitle="A comprehensive toolkit built for modern, scalable web applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 bg-slate-50`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
