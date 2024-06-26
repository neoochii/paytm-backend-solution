export function Button({label,onclick}){
    return <button onClick={onclick} type="button" class=" text-white bg-gray">
        {label}
    </button>
}