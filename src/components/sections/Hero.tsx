import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block"
          >
            Hello,
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-[1.1]">
            I'm <span className="gradient-text">Mahadi Hasan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-700 font-medium mb-6">
            Full Stack Developer | TypeScript | SQL | React Native | AI/ML Enthusiast | Open to Opportunities
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            A passionate developer dedicated to building high-performance web applications and exploring the intersection of AI and Healthcare.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Contact Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Background Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />

            {/* Image Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100 z-10"
            >
              <img
                src="/mahadi.jpeg"
                alt="Mahadi Hasan"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[1.5rem]"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <span className="font-bold text-xl">2+</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Years of</p>
                  <p className="text-sm font-bold">Experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
