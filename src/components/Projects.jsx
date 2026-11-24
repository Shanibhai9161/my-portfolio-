import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projectsList = [
    {
      id: "project1",
      title: "OFPPT Training Management Platform",
      subtitle: "Centralized Educator Training & Logistics Portal",
      description: "An enterprise web platform built for OFPPT to digitalize trainer education, session scheduling with interactive calendars, leave & absence tracking, housing logistics, and secure multi-role document management.",
      tags: ["React.js", "Laravel 11", "Tailwind CSS", "MySQL", "Sanctum API"],
      github: "https://github.com/Nouhailacodes/project",
      demo: "https://lnkd.in/p/esv_43YK",
      year: "2026",
      image: "/i.png"
    },
   {
  id: "project2",
  title: "ZAHID Parfums - Luxury E-Commerce Showcase",
  subtitle: "High-End Haute Parfumerie Platform",
  description: "A high-end full-stack e-commerce platform designed with a 'Dark Luxury Aesthetic'. Features interactive product cataloging, secure user authentication, custom shopping cart management, and streamlined checkout.",
  tags: ["React.js", "Laravel", "Tailwind CSS", "MySQL", "Blade"],
  github: "https://github.com/Nouhailacodes/parfine",
  demo: "https://lnkd.in/p/eCNX92tj",
  year: "2025",
  image: "/po.png"
},
{
  id: "project3",
  title: "ALHORIA - Insurance & HR Management System",
  description: "Comprehensive enterprise web platform for insurance agency management, centralizing claim tracking for clients and employee leave request management with multi-role access control (Admin, Employee, Client).",
  tags: ["React.js", "Laravel 12", "MySQL", "REST API", "Sanctum"],
  github: "https://github.com/Nouhailacodes/Projet_assurance_conge",
  demo: "https://lnkd.in/p/eZhc6fpg",
  year: "2026",
  image: "/im2.png"
}
  ];

  return (
    <section className="min-h-screen w-full py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
      
      {/* 🌟 Title & Subtitle Section */}
      <div className="mb-16 space-y-4 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FEATURED WORK</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Crafted with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Precision & Code</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-base md:text-lg">
          Explore a selection of end-to-end applications designed for performance, scalable architecture, and rich user experiences.
        </p>
      </div>

      {/* 🚀 Projects List */}
      <div className="space-y-16">
        {projectsList.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-2xl hover:border-purple-500/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.12)]`}
            >
              
              {/* Image Banner Container */}
              <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center p-2`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain max-h-[400px] rounded-xl group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>

              {/* Details Content */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-3xl font-black font-mono text-purple-400">
                    {project.id}
                  </span>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    {project.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-lg text-xs font-mono text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white transition duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch Demo
                  </a>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}