const Stums =(props)=>{
    return(
        <>
        <div className="px-3 mt-4 shadow border-t py-3">
            <p className="text-red-600 font-bold">STUMPS</p>
            <div className="flex py-2 items-center justify-between">
                <p className="font-bold">{props.england}</p>
                <p> <span className="font-bold">{props.engScore}</span></p>
            </div>
            <div className="flex items-center justify-between">
            <p className="font-bold py-2">{props.englandLion}</p>
            <p className="font-bold">{props.engLionScore}</p>
            </div>
            <p>Day2 Eng Lions trail by 89runs</p>
        </div>
        </>
    )
}
export default Stums;