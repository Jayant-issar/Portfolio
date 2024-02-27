
import { TextGenerateEffect } from "../../components/ui/generate-text-effect";
import { aboutProjects } from "../../../allTexts";
export function ProjectCard({about,img1,github,deployed,youtube,projectName}){


    return(
        <div id="projectCardparent" className="text-white  rounded-xl  mt-2 mb-2  h-1/2 p-2">
            <div id="photosAndAbout" className=" p-2 flex">
                <div id="photocarousal" className="  w-1/2">
                    <img src={img1} alt=""
                    className=" rounded-lg" />
                </div>
                <div id="aboutproject" className=" w-1/2 ml-6 ">
                    <h1 className=" text-5xl font-bold">
                    {projectName}...</h1>
                    <TextGenerateEffect words={about || "Welcome to my project"} />
                </div>
            </div>

            <div id="buttonsforProject" className=" flex items-center justify-between p-3">
                <div id="buttons" className="">
                <button className=" bg-[#183D3D] w-24 h-12 rounded-3xl mr-4 hover:bg-[#5C8374] "
                    onClick={()=>{
                        window.open(github || 'https://github.com/Jayant-issar','_blank')
                        
                    }} >
                        GitHub
                </button>
                <button className=" bg-[#183D3D] w-32 h-12 rounded-3xl mr-4 hover:bg-[#5C8374] "
                    onClick={()=>{
                        window.open(deployed || 'https://github.com/Jayant-issar','_blank')
                        
                    }} >
                        Use Project
                </button>
                <button className=" bg-[#183D3D] w-36 h-12 rounded-3xl mr-4 hover:bg-[#5C8374] "
                    onClick={()=>{
                        window.open(youtube || "https://www.youtube.com/@jayantissar",'_blank')
                        
                    }} >
                        Youtube Tutorial
                </button>
                </div>

                <div id="stackused" className="">
                    <div className=" text-xl font-semibold mb-1 text-[#5C8374]">
                        Stack used
                    </div>
                    <div id="stackphotos" className="flex">
                        <div id="react" className="flex items-center  h-12 w-12 mr-2">
                            <img src="./assets/reactlogo.png" alt="" />
                        </div>
                        <div id="ex" className="h-12 w-12 flex items-center mr-2 bg-white rounded-sm">
                            <img src="./assets/expressjs-icon.svg" alt="" />
                        </div>
                        <div id="tailwind" className="flex items-center h-12 w-12 mr-2">
                            <img src="./assets/tailwind-css-icon.png" alt="" />
                        </div>
                        <div className="flex items-center h-12 w-12 mr-2">
                            <img src="./assets/nodejs.svg" alt="" />
                        </div>
                        <div className="flex items-center h-12 w-12 mr-2">
                            <img src="./assets/js.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}