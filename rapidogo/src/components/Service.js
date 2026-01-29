import React from 'react'
import { Truck, Package, Clock, Globe,  } from "lucide-react";
import ServiceCard from './ServiceCard';
const Service = () => {
  return (
    <section id="services" className="py-20 px-8 bg-gray-400">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ServiceCard icon={<Truck />} title="Road Transport" desc="FTL & LTL pan-India transport solutions." />
          <ServiceCard icon={<Package />} title="Warehousing" desc="Secure, scalable storage & distribution." />
          <ServiceCard icon={<Clock />} title="Express Delivery" desc="Time-critical and last-mile delivery." />
          <ServiceCard icon={<Globe />} title="Supply Chain" desc="Optimized end-to-end logistics planning." />
        </div>
      </section>
  )
}



  

export default Service