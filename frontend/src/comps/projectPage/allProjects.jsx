
import { ProjectCard } from "./projectCard"
import { aboutProjects } from "../../../allTexts";


export function AllProjects(){


    return(
        <div id="allProjectsParent" className=" mt-5 p-4">
            <ProjectCard about={aboutProjects.storyvault} img1="./story-valult/strory-vaultlan.PNG"
            projectName={"Story-Vault"} github={"https://github.com/Jayant-issar/Story-Vault"} youtube={"https://youtu.be/yRZmWmoL1FA"} deployed={"https://story-vault-jayant.vercel.app/"} />
            <ProjectCard about={aboutProjects.swiftwallet} projectName={"Swift-Wallet"}
             img1="./swift-wallet/sw1.png" github={"https://github.com/Jayant-issar/swift-wallet"} youtube="https://youtu.be/BkX52nlOPQo?si=d0MVuSXh-gj9MuGH" />
            <ProjectCard about={aboutProjects.portfolio} img1="./portfolio-imgs/portfolio-hero.png"
            projectName={"Personal-Portfolio"} github={"https://github.com/Jayant-issar/Portfolio"} />
            
            
            
        </div>
    )
}