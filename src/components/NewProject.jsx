import Input from "./Input";

export default function NewProject(){
    return (
        <div>
            <menu className="flex">
                <li>
                    <button>Cancel</button>
                </li>
                <li>
                    <button>Save</button>
                </li>
            </menu>
            <div>
                <Input label = "Title" />
                <Input label="Description" isTextarea/>
                <Input type = "date" label="Due date" />
            </div>
        </div>
    );
}