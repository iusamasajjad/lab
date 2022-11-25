import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <>
       <div className="bg-blue-400">
       <nav className="py-4 container mx-auto flex justify-between">
                <ul className="flex items-center">
                    <Link to={"/"}>
                    <li className="w-32">
                    <img src={logo} alt="logo" />
                    </li>
                    </Link>
                    <ul className="flex items-center ml-8">
                   <div className="relative main">
                   <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Live Scores</li>
                    <div className="absolute hidden submenu">
                        <div style={{width:"400px"}} className="bg-white shadow w-full py-5 px-5 flex justify-between">
                            <div>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Live Score Home</li>
                                <Link to={"/results"}>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Results</li></Link>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Season View</li>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Desktop Scoreboard</li>
                            </div>
                            <div>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Schedule</li>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">Month view</li>
                                <li className="my-2 hover:bg-sky-200 px-2 cursor-pointer">International Calender</li>
                            </div>
                        </div>
                    </div>
                   </div>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Series</li>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Teams</li>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">News</li>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Features</li>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Videos</li>
                    <li className="mr-8 cursor-pointer px-3 hover:bg-blue-500 text-white">Stats</li>
                </ul>
                </ul>
                <ul className="flex items-center">
                <li className="mr-7 cursor-pointer text-white">EditionPK</li>
                <FontAwesomeIcon style={{color:"white",marginRight:"23px",cursor:"pointer"}} icon={solid('moon')} />
                <FontAwesomeIcon style={{color:"white",marginRight:"23px",cursor:"pointer"}} icon={solid('bell')} />
                <FontAwesomeIcon style={{color:"white",marginRight:"23px",cursor:"pointer"}} icon={solid('bars')} />
                <FontAwesomeIcon style={{color:"white",cursor:"pointer"}} icon={solid('search')} />
                </ul>
                
            </nav>
       </div>
        </>
    )
}
export default Navbar;