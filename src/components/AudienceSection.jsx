import React from "react";

const AudienceSection = ({
  isVisible,
  audienceCards,
  hoveredCard,
  setHoveredCard,
  noMoreStatements,
  sectionRef,
}) => (
  <section ref={sectionRef} data-section="audience" className="mb-xxl">
    <div
      className={`text-center mb-xl transform transition-all duration-800 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-xl font-bold text-playdate-text-primary mb-md">
        That's when we built
      </h2>
      <p className="text-playdate-text-primary max-w-2xl mx-auto">
        Not just a sports booking app, but a community designed for the modern athlete...
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-lg mb-xl">
      {audienceCards.map((card, index) => (
        <div
          key={index}
          className={`${card.bgColor} rounded-xl p-lg text-center p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-xl cursor-pointer ${
            isVisible
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

    <div
      className={`text-center space-y-sm transform transition-all duration-800 delay-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {noMoreStatements.map((statement, index) => (
        <p
          key={index}
          className={`font-medium transition-all p-4 duration-500 hover:scale-105 cursor-default ${
            index === 3
              ? "text-playdate-primary-blue font-bold text-lg"
              : "text-playdate-text-primary"
          } ${isVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}
          style={{ transitionDelay: `${600 + index * 150}ms` }}
        >
          {statement}
        </p>
      ))}
    </div>
  </section>
);

export default AudienceSection;
