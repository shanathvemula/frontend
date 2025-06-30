import React from "react";

const ProblemSolutionSection = ({
  isVisible,
  addToRefs,
  problemItems,
  activeFeature,
  setActiveFeature,
  hoveredCard,
  setHoveredCard,
}) => (
  <section
    ref={(el) => addToRefs(el, 1)}
    data-section="problem"
    className="grid lg:grid-cols-2 gap-8 mb-16 bg-gray-100 rounded-2xl p-8"
  >
    {/* Problem List */}
    <div
      className={`transition-all duration-800 ${
        isVisible.problem ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You've been there.</h2>
      <div className="space-y-4">
        {problemItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-md p-4 bg-white rounded-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer ${
              isVisible.problem ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: item.delay }}
            onClick={() => setActiveFeature(activeFeature === index ? null : index)}
          >
            <span
              className={`text-lg transition-transform duration-300 ${
                activeFeature === index ? "scale-125" : ""
              }`}
            >
              {item.emoji}
            </span>
            <span className="text-playdate-text-primary font-medium">{item.text}</span>
            {activeFeature === index && (
              <div className="ml-auto w-2 h-2 bg-playdate-primary-blue rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Solution Card */}
    <div
      className={`bg-blue-50 rounded-xl p-8 transform transition-all duration-800 hover:scale-105 hover:shadow-lg ${
        isVisible.problem ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
      onMouseEnter={() => setHoveredCard("solution")}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="text-center">
        <div
          className={`text-4xl mb-4 transition-transform duration-300 ${
            hoveredCard === "solution" ? "scale-110 rotate-12" : ""
          }`}
        >
          👥
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">We felt it too.</h3>
        <p className="text-gray-700 leading-relaxed">
          The frustration of wanting to play but struggling to find the
          right people, at the right time, at the right place. The endless
          group chats that lead nowhere. The cancelled games. The loneliness
          of benched potential.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSolutionSection;
