import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StatItem = ({
  number,
  label,
  suffix = "",
  delay = 0,
}: {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start > end) {
            setCount(end);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay * 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, number, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StatItem number={50000} suffix="+" label="Happy Users" delay={0} />
          <StatItem number={500} label="Locations" delay={1} />
          <StatItem number={100} label="Sports Venues" delay={2} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
