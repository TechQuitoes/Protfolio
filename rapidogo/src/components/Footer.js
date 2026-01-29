import React from 'react'
import {  PhoneCall } from "lucide-react";


     
      
      export const Footer = () => {
        return (
          <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-2">RapidGo Logistics</h4>
            <p>Fast & reliable transport across India.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Contact</h4>
            <p className="flex items-center gap-2"><PhoneCall size={16}/> +91-XXXXXXXXXX</p>
            <p>contact@rapidgologistics.com</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Quick Links</h4>
            <p>Services</p>
            <p>Track Shipment</p>
            <p>Careers</p>
          </div>
        </div>
        <p className="text-center text-sm mt-8">© 2026 RapidGo Logistics</p>
      </footer>
        )
      }
      