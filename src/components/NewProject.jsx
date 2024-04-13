import Input from "./Input";
import {useRef} from "react";

export default function NewProject({onAdd}){

    const title = useRef();
    const description = useRef();
    const dueDate = useRef()

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex justify-end my-4 items-center gap-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" >Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave} >Save</button>
                </li>
            </menu>
            <div>
                <Input ref = {title}  label = "Title" />
                <Input ref = {description} label="Description" isTextarea/>
                <Input ref = {dueDate} type = "date" label="Due date" />
            </div>
        </div>
    );
}