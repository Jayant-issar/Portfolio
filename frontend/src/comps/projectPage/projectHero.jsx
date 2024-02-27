
import { Meteors } from "../../components/ui/meteros"


export function ProjectHero(){


    return(
        <div id="projectHeroParentDiv" className="">
            <div id="navbar">
                <div className=" h-56 md:h-1/2 w-full  relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 
                    transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full 
                    overflow-hidden flex justify-center items-center ">

            
                    <h1 className="font-bold text-8xl text-white">
                            Projects  
                    </h1>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={70} />
                    </div>
                </div>
            </div>
        </div>
    )
}