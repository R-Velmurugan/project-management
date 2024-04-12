import emptyNotepad from "../assets/no-projects.png"
import Button from "./Button";
export default function NoProjectsSelected({onSelectAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={emptyNotepad} alt="empty notepad with a pen"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No projects selected</h2>

            <p className="text-stone-400 " >Select a project or get started with a new one</p>
            <div className="mt-8">
                <Button onClick = {onSelectAddProject} >Create a new project</Button>
            </div>
        </div>
    );
}