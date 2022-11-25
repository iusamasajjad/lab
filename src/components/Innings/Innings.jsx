const Innings =(props)=>{
    return(
        <>
        <div className="px-3 mt-4 shadow border-t py-3">
            <p className="text-red-600 font-bold">STUMPS</p>
            <div className="flex py-2 items-center justify-between">
                <p className="font-bold">{props.india}</p>
                <p> <span className="font-bold">{props.IndScore}</span></p>
            </div>
            <div className="flex items-center justify-between">
            <p className="font-bold py-2">{props.newziland}</p>
            <p className="font-bold"></p>
            </div>
            <p>Day2 Eng Lions trail by 89runs</p>
        </div>
        </>
    )
}
export default Innings;