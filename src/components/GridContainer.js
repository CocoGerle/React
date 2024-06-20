export const GridContainer = (props) =>{
    return (
        <div className="w-[1100px] grid grid-cols-3 gap-[24px] m-auto ">
            {props.children}
        </div>
    )
}