interface IContainerProps {
    children?: React.ReactNode
}

const Container:React.FC<IContainerProps> = ({
    children,
}) => {
    return (
        <div className="flex flex-col items-center font-figtree">
            <div className="bg-white px-[16px] w-full md:w-[500px]">
                {children}
            </div>
        </div>
    )
}

export default Container;