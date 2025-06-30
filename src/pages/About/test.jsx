import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFeature, setActiveFeature] = useState(null);
  const [counters, setCounters] = useState({
    matches: 0,
    players: 0,
    communities: 0,
  });

  const observerRef = useRef();
  const sectionsRef = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (isVisible.hero) {
      const animateCounter = (target, key, duration = 2000) => {
        const start = Date.now();
        const startValue = 0;

        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(
            startValue + (target - startValue) * progress,
          );

          setCounters((prev) => ({
            ...prev,
            [key]: current,
          }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      };

      setTimeout(() => {
        animateCounter(10000, "matches", 2000);
        animateCounter(25000, "players", 2500);
        animateCounter(50, "communities", 1500);
      }, 500);
    }
  }, [isVisible.hero]);

  const addToRefs = (el, index) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current[index] = el;
    }
  };

  const problemItems = [
    { emoji: "💬", text: "Endless Coordination", delay: "0ms" },
    { emoji: "📞", text: "Cold Calls", delay: "100ms" },
    { emoji: "⏳", text: "Wasted Time", delay: "200ms" },
    { emoji: "😞", text: "Weekend Blues", delay: "300ms" },
  ];

  const audienceCards = [
    {
      emoji: "👨‍💼",
      title: "Working Professionals",
      description: "Craving the rush of a Sunday showdown",
      bgColor: "bg-playdate-card-blue-light",
      delay: "0ms",
    },
    {
      emoji: "🎯",
      title: "College Players",
      description: "Hungry to prove yourself in competition",
      bgColor: "bg-playdate-card-blue-lighter",
      delay: "200ms",
    },
    {
      emoji: "⭐",
      title: "First-time Athletes",
      description: "Looking for your tribe and community",
      bgColor: "bg-playdate-card-orange-light",
      delay: "400ms",
    },
  ];

  const features = [
    { emoji: "🎮", text: "Playmate Matchmaking" },
    { emoji: "📊", text: "Rivalry Tracking" },
    { emoji: "⚡", text: "Instant Booking & Updates" },
    { emoji: "📷", text: "Media Coverage & Leaderboards" },
    { emoji: "🌐", text: "All-Age Friendly" },
  ];

  const noMoreStatements = [
    "No more turf politics.",
    "No more flaky teams.",
    'No more ghosting after saying "let\'s play soon."',
    "Just real games, real rivalries, and real glory.",
  ];

  return (
    <div className="py-lg px-lg">
      <div className="max-w-6xl mx-auto">
        <Header />
        {/* Hero Section with Animation */}
        <section
          ref={(el) => addToRefs(el, 0)}
          data-section="hero"
          className={`bg-gradient-to-br from-white to-playdate-card-blue-light rounded-xl py-xxl px-xl text-center mb-xxl transform transition-all duration-1000 ${
            isVisible.hero
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-xs text-playdate-text-secondary mb-md uppercase tracking-wider animate-bounce">
            About
          </div>
          <h1 className="text-2xl font-bold text-playdate-text-primary mb-md">
            <span
              className={`inline-block transition-all duration-700 delay-300 ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              More Than a Game,
            </span>
          </h1>
          <p
            className={`text-base text-playdate-text-primary max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            We're building a sports culture where every match matters, every
            player has a stage, and every weekend feels like game day. Join
            thousands of athletes finding their tribe and unleashing their
            potential on courts and fields across the nation.
          </p>

          {/* Animated Stats */}
          <div
            className={`mt-xl grid grid-cols-3 gap-lg max-w-md mx-auto transition-all duration-1000 delay-700 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-playdate-primary-blue">
                {counters.matches.toLocaleString()}+
              </div>
              <div className="text-xs text-playdate-text-secondary">
                Matches
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-playdate-primary-blue">
                {counters.players.toLocaleString()}+
              </div>
              <div className="text-xs text-playdate-text-secondary">
                Players
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-playdate-primary-blue">
                {counters.communities}+
              </div>
              <div className="text-xs text-playdate-text-secondary">
                Communities
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section with Staggered Animation */}
        <section
          ref={(el) => addToRefs(el, 1)}
          data-section="problem"
          className="grid lg:grid-cols-2 gap-xl mb-xxl"
        >
          {/* Problem Column */}
          <div
            className={`transform transition-all duration-800 ${
              isVisible.problem
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold text-playdate-text-primary mb-lg">
              You've been there.
            </h2>
            <div className="space-y-md">
              {problemItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-md p-md bg-white rounded-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ${
                    isVisible.problem
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: item.delay }}
                  onClick={() =>
                    setActiveFeature(activeFeature === index ? null : index)
                  }
                >
                  <span
                    className={`text-lg transition-transform duration-300 ${
                      activeFeature === index ? "scale-125" : ""
                    }`}
                  >
                    {item.emoji}
                  </span>
                  <span className="text-playdate-text-primary font-medium">
                    {item.text}
                  </span>
                  {activeFeature === index && (
                    <div className="ml-auto w-2 h-2 bg-playdate-primary-blue rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card with Hover Effect */}
          <div
            className={`bg-gradient-to-br from-playdate-card-blue-light to-playdate-card-blue-lighter rounded-xl p-xl transform transition-all duration-800 hover:scale-105 hover:shadow-2xl ${
              isVisible.problem
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            onMouseEnter={() => setHoveredCard("solution")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center">
              <div
                className={`text-4xl mb-md transition-transform duration-300 ${
                  hoveredCard === "solution" ? "scale-110 rotate-12" : ""
                }`}
              >
                👥
              </div>
              <h3 className="text-lg font-bold text-playdate-text-primary mb-md">
                We felt it too.
              </h3>
              <p className="text-playdate-text-primary leading-relaxed">
                The frustration of wanting to play but struggling to find the
                right people, at the right time, at the right place. The endless
                group chats that lead nowhere. The cancelled games. The
                loneliness of benched potential.
              </p>
            </div>
          </div>
        </section>

        {/* Target Audience Section with Card Animations */}
        <section
          ref={(el) => addToRefs(el, 2)}
          data-section="audience"
          className="mb-xxl"
        >
          <div
            className={`text-center mb-xl transform transition-all duration-800 ${
              isVisible.audience
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold text-playdate-text-primary mb-md">
              That's when we built
            </h2>
            <p className="text-playdate-text-primary max-w-2xl mx-auto">
              Not just a sports booking app, but a community designed for the
              modern athlete. We're talking about people like:
            </p>
          </div>

          {/* Three Cards with Staggered Animation */}
          <div className="grid md:grid-cols-3 gap-lg mb-xl">
            {audienceCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgColor} rounded-xl p-lg text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl cursor-pointer ${
                  isVisible.audience
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: card.delay }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`text-3xl mb-md transition-all duration-300 ${
                    hoveredCard === index ? "scale-125 animate-bounce" : ""
                  }`}
                >
                  {card.emoji}
                </div>
                <h3 className="font-bold text-playdate-text-primary mb-sm">
                  {card.title}
                </h3>
                <p className="text-sm text-playdate-text-primary">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* No More Statements with Sequential Animation */}
          <div
            className={`text-center space-y-sm transform transition-all duration-800 delay-300 ${
              isVisible.audience
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {noMoreStatements.map((statement, index) => (
              <p
                key={index}
                className={`font-medium transition-all duration-500 hover:scale-105 cursor-default ${
                  index === 3
                    ? "text-playdate-primary-blue font-bold text-lg"
                    : "text-playdate-text-primary"
                } ${isVisible.audience ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {statement}
              </p>
            ))}
          </div>
        </section>

        {/* Features Section with Interactive Elements */}
        <section
          ref={(el) => addToRefs(el, 3)}
          data-section="features"
          className="mb-xxl"
        >
          <h2
            className={`text-xl font-bold text-playdate-text-primary mb-lg text-center transform transition-all duration-800 ${
              isVisible.features
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            What makes us different
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-playdate-feature-background rounded-lg p-md flex items-center gap-md border-l-4 border-playdate-primary-blue transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isVisible.features
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <span
                  className={`text-lg transition-transform duration-300 ${
                    activeFeature === index ? "scale-125 animate-pulse" : ""
                  }`}
                >
                  {feature.emoji}
                </span>
                <span className="text-playdate-text-primary font-medium">
                  {feature.text}
                </span>
                {activeFeature === index && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-playdate-primary-blue rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section with Parallax Effect */}
        <section
          ref={(el) => addToRefs(el, 4)}
          data-section="mission"
          className={`bg-playdate-dark-navy rounded-xl py-xxl px-xl text-white text-center mb-xxl transform transition-all duration-1000 ${
            isVisible.mission
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
        >
          <h2 className="text-xl font-bold mb-lg">Why We Exist</h2>
          <div className="space-y-md mb-lg">
            <p
              className={`text-lg transition-all duration-700 delay-200 ${
                isVisible.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Because your skills deserve a platform. 🎯
            </p>
            <p
              className={`text-lg transition-all duration-700 delay-400 ${
                isVisible.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              Because we believe every weekend should feel like game day. 📅
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <h3
              className={`text-lg font-bold mb-md transition-all duration-700 delay-600 ${
                isVisible.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              You don't need a stadium to feel like a star -
            </h3>
            <p
              className={`text-gray-300 leading-relaxed transition-all duration-700 delay-800 ${
                isVisible.mission
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              We're not just building a platform. We're building a sports
              culture where passion meets opportunity, where every player
              matters, and where the love of the game brings us all together.
              Every match is a chance to prove yourself, every game is an
              opportunity to connect, and every victory is a stepping stone to
              something greater. Whether you're a weekend warrior looking for
              your next challenge, a college athlete maintaining your edge, or
              someone just discovering their athletic potential, this is your
              stage.
            </p>
          </div>
        </section>

        {/* CTA Section with Pulse Animation */}
        <section
          ref={(el) => addToRefs(el, 5)}
          data-section="cta"
          className={`bg-gradient-to-r from-playdate-primary-blue to-playdate-light-blue rounded-xl py-xxl px-xl text-white text-center transform transition-all duration-1000 ${
            isVisible.cta
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-xl font-bold mb-md animate-pulse">
            Join the movement.
          </h2>
          <p className="text-lg mb-xl">
            It isn't about the big game. It's about every game.
          </p>
          <Link
            to="/tournaments"
            className="bg-white text-playdate-primary-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-block hover:scale-110 hover:shadow-2xl transform"
          >
            Get Started Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;