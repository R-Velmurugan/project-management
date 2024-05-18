import {forwardRef} from "react";

const Input = forwardRef(function cInput({label , isTextarea , value , ...props} , ref){
    const classes = "w-full p-1 border-b-2 rounded border-stone-300 bg-stone-200 text-stone-600  focus:outline-none focus:border-stone-600";
    return(
      <div className="flex flex-col gap-1 my-4" >
          <label className="uppercase text-stone-500 text-sm" >{label}</label>
          {isTextarea ? <textarea ref={ref} className={classes} {...props} value={value} />: <input ref={ref} className={classes} {...props} value={value}/>}
      </div>
    );
});

export default Input;