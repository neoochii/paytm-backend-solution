export function Button({label,onclick}){
    return <button onClick={onclick} type="button" class=" text-black bg-gray">
        {label}
    </button>
}