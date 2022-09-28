interface ButtonGeneratePasswordProps {
    description: String;
    onClick: () => void;
}

export function ButtonGeneratePassword(props: ButtonGeneratePasswordProps) {
    return (

        <button
            className="rounded-lg px-2 py-2 w-56 font-bold hover:bg-[#6d2177] hover:text-white border-2 border-[#6d2177] bg-slate-300 p-2"
            onClick={props.onClick}
        >
            {props.description}
        </button>

    )
}