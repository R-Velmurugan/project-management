import Button from "./Button";

export default function Sidebar({onSelectAddProject}){
    return(
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="text-stone-200 mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
            <Button onClick = {onSelectAddProject} >+ Add project</Button>
        </aside>
    );
}