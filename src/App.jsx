import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import {useState} from "react";

let id = 0;

function App() {

    const [projectsState , setProjectsState] = useState({
        selectedProjectDetails : undefined,
        projects : []
    });

    function handleStartNewProject(){
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectDetails: null
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
                selectedProjectDetails: undefined,
                projects: [...prevState.projects , newProject]
            };
        })
    }

    function handleCancelAddProject(){
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectDetails: undefined
            }
        })
    }

    function handleSelectExistingProject(title , description , dueDate){
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectDetails: {title : title , description : description , dueDate : dueDate}
            }
        });
    }

    let content;

    if(projectsState.selectedProjectDetails === undefined) content = <NoProjectsSelected onSelectAddProject = {handleStartNewProject} />
    else content = <NewProject onAdd = {handleAddProject} onCancel = {handleCancelAddProject} projectDetails = {projectsState.selectedProjectDetails}/>

    return (
    <main className="h-screen my-8 flex gap-8">
        <Sidebar onSelectAddProject = {handleStartNewProject} projects={projectsState.projects} onSelectExistingProject = {handleSelectExistingProject} />
        {content}
    </main>
    );
}

export default App;
