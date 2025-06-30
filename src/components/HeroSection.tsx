import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const floatingIcons = [
    {
      icon: "🏀",
      className: "top-20 right-10 text-4xl animate-float",
      delay: 0,
    },
    {
      icon: "⚽",
      className: "top-40 right-32 text-3xl animate-float",
      delay: 1,
    },
    {
      icon: "🏸",
      className: "top-60 left-10 text-3xl animate-float",
      delay: 2,
    },
    {
      icon: "🎾",
      className: "top-32 left-32 text-2xl animate-float",
      delay: 0.5,
    },
    {
      icon: "🏐",
      className: "bottom-40 right-20 text-3xl animate-float",
      delay: 1.5,
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Floating sports icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 0.5 }}
          className={`absolute hidden lg:block ${item.className}`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                FIND YOUR
                <br />
                <span className="text-sports-blue">SPORTS BUDDY!</span>
                <span className="text-4xl">🏃‍♂️</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Whether you're a weekend warrior or aspiring champion, discover
                awesome venues, meet like-minded athletes, and experience the
                thrill of competitive sports like never before!
              </p>
            </div>

            {/* Search bar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="What sport are you interested in today?"
                    className="h-12 text-lg border-0 focus:ring-0"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-sports-blue hover:bg-sports-blue-dark text-white h-12 px-8"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Let's Go!
                </Button>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 border-black"
              >
                Find Players Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Browse Venues
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Feature highlights */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sports-green text-white p-6 rounded-2xl">
                <Users className="w-8 h-8 mb-2" />
                <h3 className="font-semibold">Connect</h3>
                <p className="text-sm opacity-90">Find teammates</p>
              </div>
              <div className="bg-sports-orange text-white p-6 rounded-2xl">
                <MapPin className="w-8 h-8 mb-2" />
                <h3 className="font-semibold">Discover</h3>
                <p className="text-sm opacity-90">Great venues</p>
              </div>
              <div className="bg-sports-purple text-white p-6 rounded-2xl">
                <Calendar className="w-8 h-8 mb-2" />
                <h3 className="font-semibold">Schedule</h3>
                <p className="text-sm opacity-90">Easy booking</p>
              </div>
              <div className="bg-sports-red text-white p-6 rounded-2xl">
                <div className="w-8 h-8 mb-2 bg-white/20 rounded-full flex items-center justify-center">
                  🏆
                </div>
                <h3 className="font-semibold">Compete</h3>
                <p className="text-sm opacity-90">Join tournaments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
