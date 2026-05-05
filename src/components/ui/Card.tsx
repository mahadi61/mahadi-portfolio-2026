import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
