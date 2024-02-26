
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
                                <SkillCard source={"./assets/reactlogo.png"} skillName={"React js"} />
                                <SkillCard source={"./assets/typescript.png"} skillName={"TypeScript"} />
                                <SkillCard source={"./assets/js.png"} skillName={"Java Script"} />    
                                <SkillCard source={"./assets/tailwind-css-icon.png"} skillName={"Tailwind CSS"} />
                                <SkillCard source={"./assets/html5.png"} skillName={"HTML5"} />
                            </div>
                        </div>
                        <div id="backendskills" className="mt-10" >
                            {/* backend wale mai margin aur flex ka jhol hai 
                            jab kam se kam 4 skill ho jaye backend mai 
                            margin hata k flex box laga dena sahi ho jayega */}
                            <h1 className="font-bold text-5xl text-white ml-20">
                                    Backend
                            </h1>
                            <div id="fontendSkillsCard" className="flex justify-evenly p-5">
                                <SkillCard source={"src/assets/nodejs.svg"} skillName={"Node js"} className={"mr-4 "} />
                                <SkillCard source={"src/assets/mongodb.svg"} skillName={"Mongo DB"} className={"mr-4"} />
                                <SkillCard source={"src/assets/expressjs-icon.svg"} skillName={"Express js"} className={"mr-4"} />
                            </div>
                        
                        </div>

                        <div id="languages" className="mt-10" >
                            <h1 className="font-bold text-5xl text-white ml-20">
                                    Programing Languages
                            </h1>
                            <div id="fontendSkillsCard" className="flex justify-evenly p-5">
                            <SkillCard source={"src/assets/typescript.png"} skillName={"TypeScript"} />
                                <SkillCard source={"src/assets/python.svg"} skillName={"Python"} />
                                
                                <SkillCard source={"src/assets/js.png"} skillName={"Java Script"} />
                            
                                <SkillCard source={"src/assets/c.svg"} skillName={"C++"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            


    )
}