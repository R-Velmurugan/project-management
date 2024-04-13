import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import {useState} from "react";

let id = 0;

function App() {

    const [projectsState , setProjectsState] = useState({
        selectedProjectId : undefined,
        projects : [],
    });

    function handleStartNewProject(){
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null
            };
        });
    }

    function handleAddProject(projectData){
        setProjectsState(prevState => {

            const newProject = {
                ...projectData,
                id : ++id
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects , newProject]
            };
        })
    }

    console.log(projectsState);

    let content;

    if(projectsState.selectedProjectId === undefined) content = <NoProjectsSelected onSelectAddProject = {handleStartNewProject} />
    else content = <NewProject onAdd = {handleAddProject} />

    return (
    <main className="h-screen my-8 flex gap-8">
        <Sidebar onSelectAddProject = {handleStartNewProject} projects={projectsState.projects} />
        {content}
    </main>
    );
}

export default App;
