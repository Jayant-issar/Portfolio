import { TextRevealCard } from "../components/ui/text-reveal-card"
import { Hero } from "../comps/hero"
import { SkillSec } from "../comps/skills"




export function Home(){

    return(
        <div className="min-h-screen pt-4 bg-[#040D12] " >
            <Hero/>
            <SkillSec/>
        </div>
    )
}