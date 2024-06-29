export function Button({label,onClick}){
    return <button onClick={onClick} type="button" class=" text-black bg-gray">
        {label}
    </button>
}