import React from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 / CSS3"
      ]
    },
    {
      title: "BACKEND",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      skills: [
        "Laravel",
        "Node.js",
        "Express.js",
        "PHP"
      ]
    },
    {
      title: "DATABASE",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      skills: [
        "MySQL",
        "MongoDB",
        "PostgreSQL"
      ]
    },
    {
      title: "TOOLS & DEVOPS",
      icon: <Wrench className="w-5 h-5 text-purple-400" />,
      skills: [
        "Git & GitHub",
        "Postman",
        "Vite / Webpack",
        "Vercel / Netlify"
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen py-12 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 text-white">
      
      {/* 1. Header Section */}
      <div className="mb-14 text-left">
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
  TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">ARSENAL</span>
</h3>
        <p className="text-gray-400 text-lg max-w-2xl">
          Technologies and tools I use to build modern, scalable, and responsive web applications.
        </p>
      </div>

      {/* 2. Skills Grid (Dynamic Card Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/[0.07] transition duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-center gap-3 pb-4 mb-6 border-b border-white/10">
                <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:scale-110 transition duration-300">
                  {category.icon}
                </div>
                <h2 className="text-sm font-bold tracking-wider text-purple-300">
                  {category.title}
                </h2>
              </div>

              {/* Centered Skill Pill Items */}
              <div className="space-y-3">
                {category.skills.map((skillName, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/30 hover:scale-[1.02] transition duration-200 flex items-center justify-center text-center"
                  >
                    <span className="font-medium text-sm text-gray-200 group-hover:text-white transition">
                      {skillName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Status Badge */}
      <div className="mt-12 flex justify-start">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/40 border border-purple-500/30 text-xs sm:text-sm font-mono tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-500 group cursor-default">
          <span className="text-pink-400 animate-spin group-hover:scale-125 transition-transform duration-300">✦</span>
          <span className="uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-300 animate-pulse">
            ALWAYS SCALING & LEARNING NEW TECH
          </span>
        </div>
      </div>

    </div>
  );
}