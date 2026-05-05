import { motion } from "framer-motion";
import { Brain, Search, CheckCircle2, FileText } from "lucide-react";
import { Card } from "../ui/Card";

const keywords = [
  "DenseNet-121", "ResNet-50", "EfficientNet-B4",
  "Grad-CAM", "LIME", "SHAP", "Hybrid Enhancement"
];

export const Thesis = () => {
  return (
    <section id="thesis" className="section-padding bg-blue-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Brain size={18} /> Research Thesis
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto mb-8"
          >
            Explainable Multi-Class Lung Disease Classification from Chest X-Ray Images Using Hybrid Image Enhancement and Transfer Learning
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Search className="text-blue-200" /> Key Objectives
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Developing a robust framework for identifying multiple lung conditions with high accuracy while providing interpretable visual explanations for medical practitioners.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {keywords.map((kw) => (
                <span key={kw} className="px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-sm font-medium transition-colors">
                  {kw}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "High Precision Models",
                "Visual Interpretability",
                "Hybrid Enhancement",
                "Explainable AI (XAI)"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <CheckCircle2 className="text-blue-300" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white text-slate-900 p-8 relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <FileText size={32} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 font-bold">Thesis Publication</p>
                  <p className="text-blue-600 font-bold">Ongoing Research</p>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">Methodology Preview</h4>
              <p className="text-slate-600 mb-6 italic">
                "Our approach leverages the power of DenseNet-121 and EfficientNet-B4, enhanced by Grad-CAM visualizations to highlight critical regions in chest radiographs, ensuring clinical trust in AI predictions."
              </p>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-blue-600"
                />
              </div>
              <p className="text-right text-xs text-slate-400 mt-2 font-bold">Accuracy: 90%+</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
