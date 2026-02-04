import { stacks } from "../data/techStackData";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 px-4 overflow-hidden relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies across multiple domains to
            deliver exceptional digital solutions
          </p>
        </div>

        {/* Stack Cards */}
        <div className="space-y-12">
          {stacks.map((stack, i) => {
            const Icon = stack.icon;

            return (
              <div
                key={i}
                className="glass-effect rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center mr-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stack.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
                  {stack.items.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="tech-badge text-center py-3 px-2 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                        <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Don't see the technology you need? We're always learning and adapting
            to new tools.
          </p>

          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-purple-500/40 transition-all duration-300">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
