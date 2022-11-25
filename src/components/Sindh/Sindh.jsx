
const Sindh =(props)=>{
   
    return(
        <>
       {props.data.map((item,key)=>( <div className="px-3 border-t py-3">
            <p className="text-red-600 font-bold">{item.live}</p>
            <div className="flex py-2 items-center justify-between">
                <p className="font-bold">{item.province}</p>
                <p>{item.over} <span className="font-bold">349/1</span></p>
            </div>
            <p className="font-bold py-2">{item.city}</p>
            <p>{item.text}</p>
        </div>))}
        </>
    )
}
export default Sindh;