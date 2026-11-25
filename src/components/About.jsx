import React from 'react';
import { Briefcase, GraduationCap, Code2, Laptop } from 'lucide-react';

export default function About() {
  const journey = [
    {
      year: "2019",
      title: "High School ",
      subtitle: "Shri Sita Ram Adarsh Inter College Nagar Basti",
      description: "Shri Sita Ram Adarsh Inter College is committed to providing quality education, developing students' skills, building confidence, and creating a bright future through knowledge, discipline, and moral values.",
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />
    },
    {
      year: "2021",
      title: "Intermediate ",
      subtitle: "RP. Adarsh Inter College, Nagar Basti",
      description: "Completed Intermediate education with a focus on academic learning, knowledge development, and personal growth. Gained essential skills, confidence, and a strong foundation for future career opportunities.",
      icon: <Laptop className="w-5 h-5 text-purple-400" />
    },
    {
      year: "2022",
      title: "Diploma",
      subtitle: "GCRG College of Polytechnic, Lucknow (UP)",
      description: "Pursued a Diploma in Civil Engineering from GCRG College of Polytechnic, gaining technical knowledge and practical skills. Alongside my studies, I developed an interest in Full Stack Web Development and started learning web technologies, programming, and software development to expand my technical skills and explore new career opportunities.",
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />
    },
    {
      year: "Currently pursuing ",
      title: "Bachelor of Computer Applications (BCA) ",
      subtitle: "KS Saket PG College, Ayodhya–Faizabad ",
      description: "Currently pursuing a Bachelor of Computer Applications (BCA), focusing on computer science, programming, and software development. Actively enhancing my technical skills in Full Stack Web Development, learning modern web technologies, and building practical projects to strengthen my knowledge and prepare for a career in the IT industry.",
      icon: <GraduationCap className="w-5 h-5 text-purple-400" />
    },
    // {
    //   year: "2026",
    //   title: "End-of-Studies Internship",
    //   subtitle: "Insurance Agency",
    //   description: "Gained real-world professional experience developing tailored digital tools and managing agency workflows.",
    //   icon: <Briefcase className="w-5 h-5 text-purple-400" />
    // }
  ];

  return (
    <div className="w-full min-h-screen py-8 sm:py-12 md:py-20 px-4 sm:px-8 max-w-6xl mx-auto relative z-10 text-white">
      
      {/* 1. Header Section / Responsive Typography */}
     {/* 1. Header Section */}
{/* 1. Header Section */}
<div className="mb-12 sm:mb-16 text-left border-l-2 border-purple-500/50 pl-4 sm:pl-6">
  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono mb-4 text-gray-300 shadow-inner group hover:border-purple-500/40 transition duration-300">
  <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
  <span className="text-purple-400 font-semibold tracking-wider uppercase">02 / ABOUT ME</span>
  <span className="text-gray-600">|</span>
  <span className="text-gray-400">Architecting Ideas</span>
</div>

  <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
    RAMAKANT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">YADAV</span>
  </h1>

  <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
    Full-Stack Web Developer based in Sohna, Gurgaon, Haryana, India.
  </p>
</div>

      {/* 2. Main Bio Card */}
      <div className="mb-12 sm:mb-20">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-8 shadow-xl hover:border-purple-500/50 transition duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-purple-500/50 flex-shrink-0">
              <img 
                src="/l.jpeg" 
                alt="RAMAKANT YADAV" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Who I Am</h2>
              <span className="text-purple-400 text-xs sm:text-sm">Full-Stack Developer</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
Full-Stack & AI developer dedicated to transforming cutting-edge technologies into real-world applications. I bridge clean architecture with rapid execution to engineer seamless, high-performance solutions.</p>        </div>
      </div>

      {/* 3. Journey / Timeline Section */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
          My Journey <div className="h-[2px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
        </h2>
{/* Responsive Grid Layout - 3 Cards per row on Large screens */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {journey.map((item, index) => (
    <div 
      key={index}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 relative flex flex-col justify-between hover:bg-white/10 transition duration-300 group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 sm:p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 group-hover:scale-110 transition duration-300">
            {item.icon}
          </div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 sm:px-3 py-1 rounded-full border border-purple-500/20">
            {item.year}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-purple-300 transition">{item.title}</h3>
        <h4 className="text-xs sm:text-sm text-gray-400 mb-3">{item.subtitle}</h4>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
      </div>

    </div>
  );
}