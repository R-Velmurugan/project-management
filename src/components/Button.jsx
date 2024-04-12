export default function Button({children , ...props}){
    return (
        <button
            className="px-2 py-3 rounded text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" {...props} >
            {children}
        </button>
    );
}