import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const experiences = [
  {
    role: "Full Stack Developer",
    org: "Essence Consultancy UK",
    period: "Dec 2025 – Present",
    desc: "Developing and maintaining high-quality web applications. Collaborating with cross-functional teams to deliver scalable solutions for international clients.",
    location: "Remote / UK"
  },
  {
    role: "VP",
    org: "City University Computer Club",
    period: "2025 – 2026",
    desc: "Led the Research and Development wing, organizing workshops on AI/ML and modern web technologies. Mentored junior developers and initiated internal club projects.",
    location: "Dhaka, Bangladesh"
  },
  {
    role: "Math & Science Teacher",
    org: "Former School/Private",
    period: "Previous",
    desc: "Simplified complex mathematical and scientific concepts for students, fostering a strong foundation in STEM subjects.",
    location: "Dhaka, Bangladesh"
  },
  {
    role: "Scout & Rover Scout Volunteer",
    org: "Bangladesh Scouts",
    period: "2015-2019",
    desc: "Active participation in social service, leadership training, and community development programs. Embodying the scout's motto of 'Be Prepared'.",
    location: "Dhaka, Bangladesh"
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="A timeline of my professional growth and community involvement"
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg -translate-x-1/2 top-2 z-10" />

              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`flex items-center gap-2 mb-2 text-blue-600 font-bold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className={`flex items-center gap-2 mb-4 text-slate-500 font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase size={16} />
                    <span>{exp.org}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.desc}
                  </p>
                  <div className={`flex items-center gap-2 mt-4 text-slate-400 text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
