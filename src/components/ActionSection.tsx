import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ActionCardProps {
  title: string;
  sport: string;
  location: string;
  time: string;
  participants: string;
  price: number;
  color: string;
  index: number;
}

const ActionCard = ({
  title,
  sport,
  location,
  time,
  participants,
  price,
  color,
  index,
}: ActionCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <Badge variant="secondary" className={`${color} text-white mb-2`}>
            {sport}
          </Badge>
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">₹{price}</div>
          <div className="text-sm text-gray-500">per person</div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm">{time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm">{participants}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="flex-1">
          Check Info
        </Button>
        <Button size="sm" className={`flex-1 ${color} hover:opacity-90`}>
          Join Now
        </Button>
      </div>
    </motion.div>
  );
};

const ActionSection = () => {
  const activities = [
    {
      title: "Morning Match",
      sport: "Cricket",
      location: "JP Nagar",
      time: "Today",
      participants: "6 people going",
      price: 200,
      color: "bg-sports-blue",
    },
    {
      title: "Football Match",
      sport: "Football",
      location: "Indiranagar",
      time: "Tomorrow",
      participants: "8 people going",
      price: 150,
      color: "bg-sports-green",
    },
    {
      title: "Power Practice",
      sport: "Badminton",
      location: "Koramangala",
      time: "Sunday",
      participants: "4 people going",
      price: 300,
      color: "bg-sports-purple",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jump Into the Action! <span className="text-3xl">🏃</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find exciting games happening right now or start your own and make
            friends!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ActionCard key={index} {...activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
