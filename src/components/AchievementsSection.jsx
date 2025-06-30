import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Trophy, Medal, Award, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Today's Achievement!",
      badge: "Winner",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
      textColor: "text-white",
    },
    {
      icon: Medal,
      title: "Best Performance",
      badge: "Gold Medalist",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      textColor: "text-white",
    },
    {
      icon: Award,
      title: "Team Player",
      badge: "MVP",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      textColor: "text-white",
    },
    {
      icon: Target,
      title: "Streak Master",
      badge: "7 Day Streak",
      color: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Today's Achievement! <span className="text-2xl">🏆</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`${achievement.color} ${achievement.textColor} px-6 py-3 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-semibold">{achievement.badge}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
