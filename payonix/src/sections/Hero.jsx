// import Button from "../components/ui/Button";
 import { services } from "../data/servicesData"
const Hero = () => {
  return (
   <section id="home" className="max-w-6xl mx-auto px-6 mt-24 pt-44 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building Reliable Software <br />
            <span className="text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Delivering Real Results</span>
          </h1>

          <p className="text-lg md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto" >We deliver primarily web applications offering results for our clients, and it's<br/>much more than this while delivering Real Result</p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-primary hover:opacity-90 transition flex items-center gap-2 shadow-glow">
              Start Your Project →
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-white/5 transition">
              Our Services
            </button>
          </div>

         

{/* Services Cards */}
<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <ServiceCard key={index} {...service} />
  ))}
</div>

        </section>

  );
};
function ServiceCard({ title, desc, icon: Icon}) {
  return (
   <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 text-center hover:shadow-glow transition">
  <div className="flex justify-center mb-4">
    <div className="text-primary text-4xl">
      <Icon />
    </div>
  </div>

  <h3 className="text-2xl font-semibold">{title}</h3>
  <p className="text-gray-400 mt-2 text-lg">{desc}</p>
</div>
  );
}

export default Hero;
