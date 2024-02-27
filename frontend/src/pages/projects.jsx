import { ProjectHero } from "../comps/projectPage/projectHero"

import { AllProjects } from "../comps/projectPage/allProjects"

export function ProjectPage(){



    return(
        <div className="min-h-screen bg-[#040D12] no-scrollbar" >
            <ProjectHero/>
            <AllProjects />
        </div>
    )
}