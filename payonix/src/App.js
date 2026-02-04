import Footer from "./components/layout/ Footer";
import Body from "./main/Body";

function App() {
  return (
    <div className=" w-full min-h-screen overflow-hidden text-white
      bg-[#05040D]">
    <div
      className="mt-12 pt-96 fixed w-full min-h-screen overflow-hidden text-white
      bg-[#05040D]
      before:absolute before:inset-0 before:content-['']
      before:bg-[radial-gradient(40%_40%_at_50%_40%,rgba(51,152,256,0.38),rgba(0,0,25,0.95)_68%)]
      "
    ></div>
      {/* Grid Overlay (optional) */}
      {/* Radial glow */}
    
      

      <div className="relative z-10">
        <Body/>
        <Footer/>
      </div>
    
    </div>
  );
}

export default App;
