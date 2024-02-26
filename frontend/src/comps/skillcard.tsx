"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/glowingCard";
import { useNavigate } from "react-router-dom";


export function SkillCard({source, skillName,aboutskill,className}) {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img src={source} className="h-24 w-24"/>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {skillName}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {aboutskill}
        </p>
        <button 
        className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
        onClick={()=>{
          navigate('/projects')
        }}>
          <span> View Projects</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
