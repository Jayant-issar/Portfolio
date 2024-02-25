import { TextRevealCard } from "../components/ui/text-reveal-card";

import { TextGenerateEffect } from "../components/ui/generate-text-effect";
import { aboutJayant,photCredits } from "../../allTexts";

export function Hero(){

    return(
        <div id="heroSection" className=' flex justify-between  rounded-md mt-20'>
            <div id="jayantPhoto" className="w-96 m-4 mt-12 
            ml-60 shadow-emerald-500 rounded-md" >
                <img src="src/assets/jayant.jpg" className="rounded-md border-none w-64 h-96 " />
                <div className="h-4/5 w-2/3 ">
                    <TextGenerateEffect words={photCredits}/>
                </div>
            </div>
            
            <div id="textReveal" className="w-1/2 p-2  h-4/5 mr-14 flex-col justify-center  ">
                <div>
                <TextRevealCard text='Now you know the buisness' revealText='and I know the chemistry' className='flex justify-center
                w-full border-none' />
                </div>

                <div id="aboutMe" className="h-full mr-6 mb-12 w-full  " >
                    <TextGenerateEffect words={aboutJayant} />
                </div>
                <div id="links" className=" flex items-center justify-end text-white pr-4 h-16">
                    <button className=" bg-[#183D3D] w-24 h-12 rounded-3xl m-3 hover:bg-[#5C8374] "
                    onClick={()=>{
                        window.open('https://github.com/Jayant-issar','_blank')
                        
                    }} >
                        GitHub
                    </button>
                    <button className=" bg-[#183D3D] w-24 h-12 rounded-3xl m-3 hover:bg-[#5C8374] " 
                    onClick={()=>{
                        window.open("https://www.linkedin.com/in/jayant-issar-b12355292/","_blank")
                    }}>
                        Linked In
                    </button>
                    <button className=" bg-[#183D3D] w-24 h-12 rounded-3xl m-3 hover:bg-[#5C8374] " 
                    onClick={()=>{
                        window.open("https://twitter.com/dehatiCoder", "_blank")
                    }}>
                    Twitter
                    </button>
                   
                </div>
            </div>
            
        </div>
    )
}