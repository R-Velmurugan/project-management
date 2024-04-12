export default function Input({label , isTextarea , ...props}){
    const classes = "w-full p-1 border-b-2 rounded border-stone-300 bg-stone-200 text-stone-600  focus:outline-none focus:border-stone-600";
    return(
      <div className="flex flex-col gap-1 my-4" >
          <label className="uppercase text-stone-500 text-sm" >{label}</label>
          {isTextarea ? <textarea className={classes} {...props} />: <input className={classes} {...props} />}
      </div>
    );
}