import { points, stats } from "../data/achievementData";


const OurAchievements = () => {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-effect rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div >
              <h2 className="text-4xl  md:text-5xl font-bold mb-8 text-white">
                Our Achievements
              </h2>

              <p className="text-lg text-gray-300 mb-8">
                At PAYONIX TECHNOLOGY PRIVATE LIMITED, our journey has been
                defined by dedication, innovation, and trust. Over the years,
                we've reached milestones that reflect our commitment to
                delivering excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="text-center glass-effect p-6 rounded-xl border-2 border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 text-indigo-300 text-4xl">
                    {item.icon}
                  </div>

                  <div className="text-4xl font-bold text-white mb-2">
                    {item.value}
                  </div>

                  <div className="text-gray-400 text-sm font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <div key={i} className="flex items-start">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${p.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                >
                  <span className="text-white text-xl">{p.icon}</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {p.title}
                  </h4>

                  <p className="text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
