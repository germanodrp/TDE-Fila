interface ButtonGeneratePasswordProps {
    description: String;
    onClick: () => void;
}

export function ButtonGeneratePassword(props: ButtonGeneratePasswordProps) {
    return (

        <button
            className="rounded-lg px-2 py-2 hover:bg-[#ffa500] bg-orange-500 p-2"
            onClick={props.onClick}
        >
            {props.description}
        </button>

    )
}