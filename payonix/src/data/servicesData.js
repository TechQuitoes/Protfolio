import { FaCode, FaMobileAlt,  } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { Code, Smartphone, Palette, Globe, Database, Zap } from "lucide-react";
export const services = [
  {
    title: "Web Development",
    icon: FaCode,
    desc: "Modern, responsive websites",
    points: ["Responsive Design", "SEO Optimized", "Fast Loading"],
  },
  {
    title: "App Development",
    icon: FaMobileAlt,
    desc: "Native & cross-platform apps",
    points: ["Cross Platform", "Push Notifications", "Store Ready"],
  },
  {
    title: "UI/UX Design",
    icon: IoMdColorPalette ,
    desc: "Beautiful, user-friendly design",
    points: ["Wireframing", "Prototyping", "Design Systems"],
  },
];


export const expertises =  [
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom websites built with modern technologies like React, Vue, and Node.js",
    gradient: "from-blue-500 to-cyan-500",
    points: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android",
    gradient: "from-purple-500 to-pink-500",
    points: ["Native Performance", "Cross-Platform", "App Store Ready", "Push Notifications"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive designs that enhance user experience and engagement",
    gradient: "from-green-500 to-teal-500",
    points: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    desc: "Complete online stores with payment integration and inventory management",
    gradient: "from-orange-500 to-red-500",
    points: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Robust server-side solutions with APIs, databases, and cloud integration",
    gradient: "from-indigo-500 to-purple-500",
    points: ["API Development", "Database Design", "Cloud Hosting", "Security"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Speed up your existing applications and improve user experience",
    gradient: "from-yellow-500 to-orange-500",
    points: ["Speed Optimization", "Code Review", "Performance Audit", "Monitoring"],
  },
];

