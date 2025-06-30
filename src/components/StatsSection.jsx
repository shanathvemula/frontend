import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  TrendingUp,
  Users,
  MapPin,
  Building2,
  Award,
  Clock,
} from "lucide-react";
import { InteractiveCard, AnimatedSection } from "./AnimationWrapper";

const StatItem = ({
  number,
  label,
  suffix = "",
  delay = 0,
  icon: Icon,
  description,
  trend,
  color = "sports-blue",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const controls = animate(motionValue, number, {
          duration: 2,
          ease: "easeOut",
          onUpdate: (latest) => setCount(Math.round(latest)),
        });
        return controls.stop;
      }, delay * 200);

      return () => clearTimeout(timer);
    }
  }, [isInView, number, delay, motionValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0, scale: 0.8 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <InteractiveCard hoverScale={1.08} className="text-center">
        <motion.div
          className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
          whileHover={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)",
          }}
        >
          {/* Icon with enhanced animations */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              delay: delay * 0.2 + 0.3,
              duration: 0.6,
              type: "spring",
            }}
            className={`inline-flex p-4 rounded-2xl bg-gradient-to-r from-${color} to-${color}-dark mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Counter with enhanced styling */}
          <motion.div
            className={`text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-${color} bg-clip-text text-transparent`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              delay: delay * 0.2 + 0.5,
              type: "spring",
              stiffness: 200,
            }}
          >
            {count.toLocaleString()}
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: delay * 0.2 + 1 }}
              className={`text-${color}`}
            >
              {suffix}
            </motion.span>
          </motion.div>

          {/* Label with description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: delay * 0.2 + 0.7 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
          </motion.div>

          {/* Trend indicator */}
          {trend && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: delay * 0.2 + 1 }}
              className="inline-flex items-center space-x-1 text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full"
            >
              <TrendingUp className="w-4 h-4" />
              <span>{trend}</span>
            </motion.div>
          )}

          {/* Animated progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: delay * 0.2 + 1.2, duration: 1 }}
            className={`h-1 bg-gradient-to-r from-${color} to-${color}-dark rounded-full mt-4 origin-left`}
          />
        </motion.div>
      </InteractiveCard>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      number: 50000,
      suffix: "+",
      label: "Happy Athletes",
      description: "Active users finding their perfect sports partners",
      trend: "↗ 23% this month",
      icon: Users,
      color: "sports-blue",
    },
    {
      number: 500,
      label: "Prime Locations",
      description: "Verified venues across major cities",
      trend: "↗ 15% this month",
      icon: MapPin,
      color: "sports-green",
    },
    {
      number: 100,
      label: "Sports Venues",
      description: "Premium facilities ready to book",
      trend: "↗ 8% this month",
      icon: Building2,
      color: "sports-orange",
    },
  ];

  const additionalStats = [
    { number: 25000, suffix: "+", label: "Games Played", icon: Award },
    { number: 98, suffix: "%", label: "Satisfaction Rate", icon: TrendingUp },
    { number: 24, suffix: "/7", label: "Support Available", icon: Clock },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-sports-blue/10 to-sports-purple/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-sports-orange/10 to-sports-red/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Athletes
              <motion.span
                className="inline-block ml-3"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🏆
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of sports enthusiasts who've already found their
              perfect game
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index} />
          ))}
        </div>

        {/* Additional stats row */}
        <AnimatedSection delay={0.5}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {additionalStats.map((stat, index) => (
              <InteractiveCard key={stat.label} hoverScale={1.05}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl text-center border border-white/30 hover:bg-white/80 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-sports-purple" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </InteractiveCard>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Call to action */}
        <AnimatedSection delay={0.8} className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-sports-blue p-8 rounded-3xl text-white max-w-2xl mx-auto shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join the Community?
            </h3>
            <p className="text-blue-100 mb-6">
              Start your sports journey today and become part of our growing
              family
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-sports-blue px-8 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Get Started Now
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
