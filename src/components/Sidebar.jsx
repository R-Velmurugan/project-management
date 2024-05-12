import Button from "./Button";

export default function Sidebar({onSelectAddProject , projects , onSelectExistingProject}){
    return(
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="text-stone-200 mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <Button onClick = {onSelectAddProject} >+ Add project</Button>

            <ul>
                {projects.map((project) => (
                    <li key = {project.id}>
                        <button onClick={() => {onSelectExistingProject(project.id)}} className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-800">
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}