import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SportCategoryProps {
  name: string;
  icon: string;
  participants: string;
  color: string;
  index: number;
}

const SportCategory = ({
  name,
  icon,
  participants,
  color,
  index,
}: SportCategoryProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`${color} rounded-3xl p-8 text-center cursor-pointer hover:shadow-lg transition-all duration-300`}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-white mb-2">{name}</h3>
      <p className="text-white/80 text-sm">{participants}</p>
    </motion.div>
  );
};

const SportsCategories = () => {
  const sports = [
    {
      name: "Badminton",
      icon: "🏸",
      participants: "22,456+ enthusiasts",
      color: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      name: "Football",
      icon: "⚽",
      participants: "18,234+ players",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      name: "Cricket",
      icon: "🏏",
      participants: "31,567+ cricketers",
      color: "bg-gradient-to-br from-red-400 to-red-600",
    },
    {
      name: "Swimming",
      icon: "🏊‍♂️",
      participants: "15,123+ swimmers",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      name: "Tennis",
      icon: "🎾",
      participants: "12,890+ tennis lovers",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
    },
    {
      name: "Basketball",
      icon: "🏀",
      participants: "9,456+ ballers",
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What's Everyone Playing? <span className="text-3xl">🔥</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out the hottest sports in your area and join the fun!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {sports.map((sport, index) => (
            <SportCategory key={index} {...sport} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCategories;
