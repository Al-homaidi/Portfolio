import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 border border-transparent hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/20">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-500" />
        <img
          src={`/${TechStackIcon}`}
          alt={Language}
          className="relative w-10 h-10 md:w-12 md:h-12 transform transition-transform duration-500 group-hover:rotate-12"
        />
      </div>
      <span className="text-slate-400 font-semibold text-sm md:text-base group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon;
