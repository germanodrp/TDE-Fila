interface ButtonGeneratePasswordProps {
    description: String;
    onClick: () => void;
}

export function ButtonGeneratePassword(props: ButtonGeneratePasswordProps) {
    return (

        <button
            className="bg-white hover:bg-slate-400 rounded-sm px-2 py-2 border-4 border-indigo-800 bg-slate-200 rounded-lg p-2"
            onClick={props.onClick}
        >
            {props.description}
        </button>

    )
}