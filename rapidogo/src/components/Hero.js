import React from 'react'
import { Button } from "./ui/Button";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Fast. Reliable. Logistics.</h2>
            <p className="max-w-2xl mx-auto mb-8">End-to-end transport & supply chain solutions built for speed, safety, and scale.</p>
            <div className="flex justify-center gap-4">
              <Button className="text-white  hover:bg-orange-600">Request a Quote</Button>
              <Button variant="outline" className="text-white  hover:bg-orange-600 border-white">Track Shipment</Button>
            </div>
          </section>
    
  )
}

export default Hero