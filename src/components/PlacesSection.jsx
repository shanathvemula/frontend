import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Clock,
  Users,
  ArrowRight,
  Heart,
  Share2,
  Bookmark,
  Calendar,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  InteractiveCard,
  AnimatedSection,
  MagneticButton,
} from "./AnimationWrapper";

const VenueCard = ({
  name,
  location,
  rating,
  sport,
  price,
  availability,
  features,
  color,
  index,
  image,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0, rotateX: 45 }}
      animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="group perspective-1000"
    >
      <InteractiveCard
        hoverScale={1.02}
        className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
      >
        <motion.div
          whileHover={{
            rotateY: 5,
            transition: { duration: 0.3 },
          }}
          className="relative"
        >
          {/* Enhanced image section */}
          <div className={`h-56 ${color} relative overflow-hidden`}>
            {/* Gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating action buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <motion.button
                onClick={handleLike}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full backdrop-blur-md transition-all duration-300 ${
                  isLiked
                    ? "bg-red-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Heart
                  className={`w-5 h-5 mx-auto ${isLiked ? "fill-current" : ""}`}
                />
              </motion.button>
              <motion.button
                onClick={handleBookmark}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full backdrop-blur-md transition-all duration-300 ${
                  isBookmarked
                    ? "bg-yellow-500 text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Bookmark
                  className={`w-5 h-5 mx-auto ${
                    isBookmarked ? "fill-current" : ""
                  }`}
                />
              </motion.button>
            </div>

            {/* Sport badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3 }}
              className="absolute top-4 left-4"
            >
              <Badge
                variant="secondary"
                className="bg-white/95 text-gray-800 font-semibold backdrop-blur-sm hover:bg-white transition-all duration-300"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index }}
                  className="mr-1"
                >
                  {sport === "Swimming"
                    ? "🏊‍♂️"
                    : sport === "Football"
                      ? "⚽"
                      : sport === "Tennis"
                        ? "🎾"
                        : "🏸"}
                </motion.span>
                {sport}
              </Badge>
            </motion.div>

            {/* Rating badge */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.4 }}
              className="absolute top-16 right-4"
            >
              <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-bold text-gray-800">
                  {rating}
                </span>
              </div>
            </motion.div>

            {/* Venue info overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.5 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">
                {name}
              </h3>
              <div className="flex items-center text-white/90">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm drop-shadow">{location}</span>
              </div>
            </motion.div>

            {/* Hover overlay with quick actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="flex space-x-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced content section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.6 }}
            className="p-6"
          >
            {/* Info row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-sm font-medium">{availability}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-blue-500" />
                  <span className="text-sm font-medium">8 max</span>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </div>

            {/* Features with enhanced styling */}
            <div className="flex flex-wrap gap-2 mb-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="outline"
                    className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <Zap className="w-3 h-3 mr-1 text-sports-blue" />
                    {feature}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Price and actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.8 }}
              className="flex items-center justify-between"
            >
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  ₹{price}
                </span>
                <span className="text-gray-500 ml-1 text-sm">/hour</span>
              </div>
              <div className="flex gap-2">
                <InteractiveCard>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-gray-50 transition-all duration-300"
                  >
                    Info
                  </Button>
                </InteractiveCard>
                <MagneticButton className="bg-sports-blue hover:bg-sports-blue-dark text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Now
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </InteractiveCard>
    </motion.div>
  );
};

const PlacesSection = () => {
  const venues = [
    {
      name: "Nisha Match Swimming Pool",
      location: "8 km away",
      rating: 4.9,
      sport: "Swimming",
      price: 500,
      availability: "Today",
      features: ["Changing Rooms", "Parking", "Coaching"],
      color: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
    },
    {
      name: "Kickit - The Social Club",
      location: "12 km away",
      rating: 4.8,
      sport: "Football",
      price: 800,
      availability: "Tomorrow",
      features: ["Pro Equipment", "Coaching", "Locker Room"],
      color: "bg-gradient-to-br from-green-400 via-green-500 to-green-600",
    },
    {
      name: "Sports Zone Tennis Courts",
      location: "5 km away",
      rating: 4.9,
      sport: "Tennis",
      price: 600,
      availability: "Today",
      features: ["Night Play", "Equipment", "Refreshments"],
      color: "bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600",
    },
    {
      name: "Kicks Football Arena",
      location: "15 km away",
      rating: 4.7,
      sport: "Football",
      price: 1200,
      availability: "This Week",
      features: ["Premium Ground", "Advanced Booking", "Tournament Ready"],
      color: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
    },
  ];

  const filterOptions = [
    "All Sports",
    "Swimming",
    "Football",
    "Tennis",
    "Basketball",
  ];
  const [activeFilter, setActiveFilter] = useState("All Sports");

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-sports-blue/10 to-sports-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-sports-orange/10 to-sports-red/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
          y: [0, -15, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Amazing Places to Play!
              <motion.span
                className="inline-block ml-4 text-4xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🏟️
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From cozy local courts to professional facilities - find the
              perfect spot for your game with our curated selection of premium
              venues!
            </p>

            {/* Filter buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {filterOptions.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-sports-blue text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center text-sports-blue hover:text-sports-blue-dark font-semibold cursor-pointer"
              >
                See All Venues
                <ArrowRight className="w-5 h-5 ml-2" />
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-1"
                >
                  →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Enhanced venues grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {venues.map((venue, index) => (
            <VenueCard key={index} {...venue} index={index} />
          ))}
        </div>

        {/* Enhanced pagination with interactive dots */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mb-8"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.3 }}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === 1
                    ? "bg-sports-blue scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>

          {/* Load more button */}
          <MagneticButton className="bg-sports-blue text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Load More Venues
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-2"
            >
              ⚡
            </motion.span>
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlacesSection;
