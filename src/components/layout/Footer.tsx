import { Link } from "react-scroll";
import { Code2 as Github, Briefcase as Linkedin, Globe as Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 font-heading">Mahadi Hasan.</h2>
            <p className="text-slate-500 text-lg max-w-md mb-8">
              Building modern, scalable, and user-centric digital experiences with a focus on quality and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-4">
              {["Hero", "About", "Skills", "Experience", "Projects"].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    smooth={true}
                    className="text-slate-600 hover:text-blue-600 font-medium cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Contact</h4>
            <ul className="space-y-4 text-slate-600 font-medium">
              <li>Dhaka, Bangladesh</li>
              <li>mahadihasan8461@gmail.com</li>
              <li>+880 1865 697584</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-center items-end gap-6">
          <p className="text-slate-500 font-medium">
            © {currentYear} Mahadi Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
