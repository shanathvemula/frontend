import React from "react";

const MissionSection = ({ isVisible, sectionRef }) => (
  <section
    ref={sectionRef}
    data-section="mission"
    className={`bg-playdate-dark-navy p-8 rounded-8 py-xxl px-xl text-white text-center mb-xxl transform transition-all duration-1000 ${
      isVisible
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-20 opacity-0 scale-95"
    }`}
  >
    <h2 className="text-xl font-bold mb-lg">Why We Exist</h2>
    <div className="space-y-md mb-lg p-4">
      <p
        className={`text-lg transition-all duration-700 delay-200 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        Because your skills deserve a platform. 🎯
      </p>
      <p
        className={`text-lg transition-all duration-700 delay-400 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        Because every weekend should feel like game day. 📅
      </p>
    </div>
    <div className="max-w-3xl mx-auto">
      <h3
        className={`text-lg font-bold mb-md transition-all duration-700 delay-600 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        You don't need a stadium to feel like a star -
      </h3>
      <p
        className={`text-gray-300 leading-relaxed transition-all duration-700 delay-800 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        We're not just building a platform. We're building a sports culture where passion meets opportunity, where every player matters, and where the love of the game brings us all together. Every match is a chance to prove yourself, every game is an opportunity to connect, and every victory is a stepping stone to something greater. Whether you're a weekend warrior looking for your next challenge, a college athlete maintaining your edge, or someone just discovering their athletic potential, this is your stage.
      </p>
    </div>
  </section>
);

export default MissionSection;
