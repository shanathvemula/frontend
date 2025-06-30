import React from "react";

const FeaturesSection = ({
  isVisible,
  features,
  activeFeature,
  setActiveFeature,
  sectionRef,
}) => (
  <section ref={sectionRef} data-section="features" className="mb-xxl">
    <h2
      className={`text-xl font-bold text-playdate-text-primary mb-lg text-center transform transition-all duration-800 ${
        isVisible
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
          className={`bg-playdate-feature-background rounded-lg p-8 flex items-center gap-md border-l-4 border-playdate-primary-blue transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ${
            isVisible
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
            <div className="ml-auto w-2 h-2 bg-playdate-primary-blue rounded-full animate-ping"></div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
