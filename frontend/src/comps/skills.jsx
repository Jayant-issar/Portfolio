
import React from "react"
import { Meteors } from "../components/ui/meteros"
import { SkillCard } from "./skillcard"


export function SkillSec(){
    return(
            <div className="mt-24">
                <div className=" h-56 md:h-1/2 w-full  relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 
                    transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full 
                    overflow-hidden flex justify-center items-center ">

            
                    <h1 className="font-bold text-8xl text-white">
                            Skills  
                    </h1>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={70} />
                    </div>
                </div>

                <div id="devlopmentSkills" className="mt-5 p-5  w-full">
                    <h1 className="font-bold text-6xl text-white">
                            Software Devlopment
                    </h1>
                    <div id="allskills" className=" pl-10 ">
                        <div id="fontend" className="mt-6" >
                            <h1 className="font-bold text-5xl text-white ml-20 ">
                                    Frontend
                            </h1>
                            <div id="fontendSkillsCard" className="flex justify-evenly p-5">
                                <SkillCard source={"./assets/reactlogo.png"} skillName={"React js"} butttonName={"View Projects"} />
                                <SkillCard source={"./assets/typescript.png"} skillName={"TypeScript"} butttonName={"View Projects"}/>
                                <SkillCard source={"./assets/js.png"} butttonName={"View Projects"} skillName={"Java Script"} />    
                                <SkillCard source={"./assets/tailwind-css-icon.png"} skillName={"Tailwind CSS"} butttonName={"View Projects"}/>
                                <SkillCard source={"./assets/html5.png"} skillName={"HTML5"} butttonName={"View Projects"}/>
                            </div>
                        </div>
                        <div id="backendskills" className="mt-10" >
                            {/* backend wale mai margin aur flex ka jhol hai 
                            jab kam se kam 4 skill ho jaye backend mai 
                            margin hata k flex box laga dena sahi ho jayega */}
                            <h1 className="font-bold text-5xl text-white ml-20">
                                    Backend
                            </h1>
                            <div id="backendSkillsCards" className="flex justify-evenly p-5">
                                <SkillCard source={"./assets/nodejs.svg"} skillName={"Node js"} className={"mr-4 "} butttonName={"View Projects"} />
                                <SkillCard source={"./assets/mongodb.svg"} skillName={"Mongo DB"} className={"mr-4"} butttonName={"View Projects"} />
                                <SkillCard source={"./assets/expressjs-icon.svg"} skillName={"Express js"} className={"mr-4"} butttonName={"View Projects"} />
                            </div>
                        
                        </div>

                        <div id="languages" className="mt-10" >
                            <h1 className="font-bold text-5xl text-white ml-20">
                                    Programing Languages
                            </h1>
                            <div id="fontendSkillsCard" className="flex justify-evenly p-5">
                            <SkillCard source={"src/assets/typescript.png"} skillName={"TypeScript"} butttonName={"View Projects"} />
                                <SkillCard source={"./assets/python.svg"} skillName={"Python"} butttonName={"View Projects"} />
                    
                                <SkillCard source={"./assets/js.png"} skillName={"Java Script"} butttonName={"View Projects"} />
                
                                <SkillCard source={"./assets/c.svg"} skillName={"C++"} butttonName={"View Projects"} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* DSA */}

                <div id="dsaskills" className="mt-20 mb-20 p-5  w-full">
                    <h1 className="font-bold text-6xl text-white">
                            Data Structures and Algorithms
                    </h1>
                    <div id="allskills" className=" pl-10 ">
                        
                        <div id="backendskills" className="mt-10" >
                            {/* backend wale mai margin aur flex ka jhol hai 
                            jab kam se kam 4 skill ho jaye backend mai 
                            margin hata k flex box laga dena sahi ho jayega */}
                            <h1 className="font-bold text-5xl text-white ml-20">
                                
                            </h1>
                            <div id="fontendSkillsCard" className="flex justify-evenly p-5">
                                <SkillCard source={"./assets/code-forces.svg"} skillName={"Code Forces"} 
                                aboutskill={"Rating-1000"} className={"mr-4 "} butttonName={"View Profile"} />
                                <SkillCard source={"./assets/leetcode.svg"} butttonName={"View Profile"} skillName={"Leet Code"} aboutskill={"No. of questions- 50"} className={"mr-4"} />
                                <SkillCard source={"./assets/hackerrank.svg"} skillName={"Hackerrank"}
                                aboutskill={"Python rating- 4 stars⭐"} butttonName={"View Profile"} className={"mr-4"} />
                            </div>
                        
                        </div>

                       
                    </div>
                </div>
            </div>

            


    )
}