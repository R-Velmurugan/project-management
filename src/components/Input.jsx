export default function Input({label , isTextarea , ...props}){
    return(
      <div>
          <label>{label}</label>
          {isTextarea ? <textarea {...props} />: <input {...props} />}
      </div>
    );
}