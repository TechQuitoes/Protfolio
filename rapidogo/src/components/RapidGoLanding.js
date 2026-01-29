import React from "react";

import { Button } from "./ui/Button";
import Header from "./Header";
import Hero from "./Hero";
import Service from "./Service";
import Choose from "./Choose";
import { Footer } from "./Footer";


export default function RapidGoLanding() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <Header/>
      {/* Hero Section */}
      <Hero/>

      {/* Services */}
      <Service/>

      {/* Why Choose Us */}
     <Choose/>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Move Faster?</h3>
        <p className="mb-6">Get a free logistics quote today.</p>
        <Button className="bg-white text-orange-500 hover:bg-gray-100">Get a Quote</Button>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}



