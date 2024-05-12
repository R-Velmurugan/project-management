import Input from "./Input";
import {useRef} from "react";
import Modal from "./Modal";

export default function NewProject({onAdd , onCancel}){

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate === ""){
            modal.current.open();
            return;
        }

        onAdd({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-500 my-4" >Invalid Input</h2>
                <p className="text-stone-600 " >You missed a field buddy...</p>
                <p className="text-stone-600 " >Make sure that all fields are entered</p>
            </Modal>

            <div className="w-[35rem] mt-16">
                <menu className="flex justify-end my-4 items-center gap-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950" onClick={onCancel} >Cancel</button>
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
        </>
    );
}