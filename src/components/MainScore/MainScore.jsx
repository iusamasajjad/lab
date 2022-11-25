import Sindh from "../Sindh/Sindh";
import { useState } from "react";

const MainScore =()=>{
    const[data,setData]=useState ([
        {
            id:1,live:"Not Covered Live",province:"Sindh",over:"(75ov)",score:"349/1",city:"Balochistan",text:"Sindh chose to bat"
        },
        {
            id:2,live:"Not Covered Live",province:"Southern Punjab",over:"(74.3ov)",score:"270/3",city:"Central Punjab (Pakistan)",text:"Central PNJB chose to field"
        },
        {
            id:2,live:"Not Covered Live",province:"Northern(Pakistan)",over:"(2 ov)",score:"6/1",city:"Khyber Pakhtunkhwa",text:"Khyber trail by 217 runs"
        },
    ]);
    return(
        <>
        <div className="mt-3 mx-2">
            <div className="shadow">
                <p className="px-3 font-bold py-4">Quid-E-Azam TROPHY</p>
                <div>
                    <Sindh  data={data}/>
                </div>
            </div>
        </div>
        </>
    );
}
export default MainScore;