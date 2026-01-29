import React from 'react'
import { Button } from "./ui/Button";
const Header = () => {
  return (
     <header className="flex items-center justify-between px-8 py-4 shadow-md">
            <h1 className="text-2xl font-bold text-blue-700">Rapid<span className="text-orange-500">Go</span> Logistics</h1>
            <nav className="space-x-6 hidden md:block">
              <a href="#services">Services</a>
              <a href="#industries">Industries</a>
              <a href="#track">Track</a>
              <a href="#contact">Contact</a>
            </nav>
            <Button className=" bg-gray-400 hover:bg-orange-600">Get a Quote</Button>
          </header>
  )
}

export default Header