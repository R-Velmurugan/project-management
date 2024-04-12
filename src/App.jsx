import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectsSelected from "./components/NoProjectsSelected";
import {useState} from "react";

function App() {

    const [projectsState , setProjectsState] = useState({
        selectedProjectId : undefined,
        projects : [],
    });

    function handleStartNewProject(){
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    let content;

    if(projectsState.selectedProjectId === undefined) content = <NoProjectsSelected onSelectAddProject = {handleStartNewProject} />
    else content = <NewProject/>

    return (
    <main className="h-screen my-8 flex gap-8">
        <Sidebar onSelectAddProject = {handleStartNewProject} />
        {content}
    </main>
    );
}

export default App;
