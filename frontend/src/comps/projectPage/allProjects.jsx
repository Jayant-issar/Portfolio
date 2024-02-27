
import { ProjectCard } from "./projectCard"
import { aboutProjects } from "../../../allTexts";


export function AllProjects(){


    return(
        <div id="allProjectsParent" className=" mt-5 p-4">
            <ProjectCard about={aboutProjects.swiftwallet} projectName={"Swift-Wallet"}
             img1="./swift-wallet/sw1.png" youtube="https://youtu.be/BkX52nlOPQo?si=d0MVuSXh-gj9MuGH" />
            <ProjectCard about={aboutProjects.portfolio} img1="./portfolio-imgs/portfolio-hero.png"
            projectName={"Personal-Portfolio"} />
        </div>
    )
}