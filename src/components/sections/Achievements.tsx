import { motion } from "framer-motion";
import { Trophy, Medal, Users, Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";



export const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Achievements & Recognition"
          subtitle="Celebrating milestones and professional validation"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Achievement Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10 border-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Trophy size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <Medal size={24} />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-sm opacity-80">Competition Result</span>
                </div>

                <h3 className="text-4xl font-bold mb-4">1st Runner Up – Startup Business Idea Contest 2026</h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                  Led a dynamic team to develop an innovative housing solution tailored for the growing urban challenges of Dhaka city. Our platform aimed to streamline the rental process with AI-driven matching and secure verification.
                </p>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-200" />
                    <div>
                      <p className="text-xs opacity-70 font-bold uppercase">Role</p>
                      <p className="font-bold">Team Lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="text-blue-200" />
                    <div>
                      <p className="text-xs opacity-70 font-bold uppercase">Award</p>
                      <p className="font-bold">1st Runner Up</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ImageIcon className="text-blue-600" size={20} />Gallery
              </h4>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="aspect-video bg-slate-100 rounded-xl overflow-hidden cursor-pointer border border-slate-200"
              >
                <img
                  src="/startup.png"
                  alt="Certificate"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
              <p className="text-sm text-slate-500 mt-4 text-center font-medium">Click to preview full size</p>
            </Card>

            <div className="bg-white rounded-3xl border border-slate-100 p-6 flex items-center justify-between shadow-sm">
              <div>
                <p className="text-3xl font-bold text-blue-600">3+</p>
                <p className="text-sm text-slate-500 font-medium">Completed Courses</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <Medal size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
