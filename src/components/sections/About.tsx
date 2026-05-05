import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, HeartPulse } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";

const highlights = [
  {
    icon: <GraduationCap className="text-blue-600" />,
    title: "Education",
    description: "City University",
    sub: "CGPA: 3.80/4.00",
  },
  {
    icon: <Briefcase className="text-blue-600" />,
    title: "Experience",
    description: "Essence Consultancy UK",
    sub: "Full Stack Developer",
  },
  {
    icon: <HeartPulse className="text-blue-600" />,
    title: "Research",
    description: "AI/ML & Healthcare",
    sub: "Lung Disease Thesis",
  },
  {
    icon: <Award className="text-blue-600" />,
    title: "Leadership",
    description: "VP of CUCC",
    sub: "R&D Wing",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Passionate developer dedicated to creating impactful solutions"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Building the Future, One Line of Code at a Time</h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a dedicated Full Stack Developer currently working at <strong>Essence Consultancy UK</strong>.
                My journey in technology is driven by a deep curiosity for solving complex problems
                and a commitment to excellence.
              </p>
              <p>
                With a strong academic background from <strong>City University</strong> (CGPA: 3.80),
                I have honed my skills in the MERN stack, Next.js, and TypeScript.
                My leadership as the <strong>VP of City University Computer Club</strong> has allowed me to foster innovation and
                collaborate on cutting-edge projects.
              </p>
              <p>
                My research interests lie at the intersection of <strong>AI/ML & Healthcare</strong>,
                specifically focusing on explainable medical imaging classification.
                I believe in technology that not only works but is also transparent and trustworthy.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-8"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-1">{item.description}</p>
                <p className="text-slate-500 text-xs">{item.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
