interface IInputProps {
    label?: string
    password?: boolean,
    email?:boolean,
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    mb?:string,
    children?: React.ReactNode,
    name:string,
    value: string,
    calendar?: boolean
}

const Input:React.FC<IInputProps> = (props) => {


    return (
        <div className="flex flex-col" style={{marginBottom: props.mb}}>

            {<label className="mb-[8px]">{props.label}</label>}
            
            <div className="flex flex-row items-center rounded-[8px] border border-MAINGREY px-[16px] py-[12px]">
                <input name={props.name} value={props.value} type={props.password ? "password":props.email ? "email":props.calendar?"date":"text"} placeholder={props.placeholder} className="flex-grow w-1 outline-none font-medium placeholder-PLACEHOLDER" onChange={props.onChange} />
                {props.children}
            </div>

        </div>
    )
}

export default Input;