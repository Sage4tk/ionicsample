interface IButtonProps {
    title: string,
    mb?: string | number,
    mt?: string | number ,
    widthFull?: boolean,
    disabled? : boolean,
    onPress: () => void
}

const Button:React.FC<IButtonProps> = ({
    title,
    mb,
    mt,
    widthFull,
    disabled,
    onPress
}) => {
    return (
        <button disabled={disabled} onClick={onPress} className="bg-MAIN rounded-[8px] py-[12px] text-white font-medium" style={{marginTop: mt, marginBottom:mb, width: widthFull ? "100%":undefined, opacity: disabled ? 0.5 :undefined}}>
            {title}
        </button>
    )
}

export default Button;