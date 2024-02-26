
import { Meteors } from "../components/ui/meteros"



export function ContactMe(){


    return(
        <div className=" min-h-screen">
            <div id="contactme starting" className=" h-56 md:h-1/2 w-full  relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 
                    transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full 
                    overflow-hidden flex justify-center items-center ">

            
                    <h1 className="font-bold text-8xl text-white">
                            Contact Me
                    </h1>
                    
                    <Meteors number={70}  />
                    </div>
            </div>

            <div id="contactform" className="  h-full mt-10 rounded-md p-5 w-full " >
                
                <h1 className=" text-white text-4xl font-semibold">
                Drop your details here</h1>
                <div id="form" className=" mt-10 w-1/2  ">
                    <input type="email" name="" id="" placeholder="Enter your email"
                    className="p-2  h-20 w-3/5 text-white bg-transparent border-[#5C8374] border-2
                      text-2xl rounded-full mb-6
                    " />
                    <br />
                    <input type="text" name="" id="" placeholder="Enter your Full name"
                    className="p-2  h-20 w-3/5 text-white bg-transparent border-[#5C8374] border-2
                      text-2xl rounded-full mb-6
                    " />
                    <br />
                    <input type="text" name="" id="" placeholder="Please leave a review on the portfolio project"
                    className="p-2  h-20 w-4/5 text-white bg-transparent border-[#5C8374] border-2
                      text-2xl rounded-full mb-6
                    " />
                    <br />
                    <button className="bg-[#5C8374] w-36 h-14 rounded-full " >
                        Send !
                    </button>
                    
                </div>

            </div>
        </div>
    )
}