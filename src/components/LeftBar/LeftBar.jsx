import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react';
import Stums from '../Stumps/Stums';
import Innings from '../Innings/Innings';
const LeftBar =()=>{
    const arrow= <FontAwesomeIcon style={{color:"blue",marginRight:"23px"}} icon={solid('arrow-right')} />;
    const [england,setEngland]=useState("England");
    const [engScore,setEngScore]=useState("501/7d");
    const [englandLion,setEnglandLion]=useState("England Lions");
    const [engLionScore,setEngLionScore]=useState("(77 ov)412/9");
    const [india,setIndia]=useState("India");
    const [IndScore,setIndScore]=useState("501/7d");
    const [newziland,setNewziland]=useState("New Zeland");

    return(
        <>
        <div>
           <div>
           </div>
            < Stums england={england} engScore={engScore} englandLion={englandLion} engLionScore={engLionScore} />
            <Innings india={india} IndScore={IndScore} newziland={newziland}/>
        </div>
        </>
    );
}
export default LeftBar;