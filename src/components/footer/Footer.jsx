import { Link } from "react-router-dom";
const Footer =()=>{
    return (
    <>
        <div style={{borderRadius:"10px"}} className="shadow container mx-auto">
           <div className="flex justify-between px-2 py-4 my-3">
           <div>
                <p className="border-b pr-4 py-3 font-bold">Key Series</p>
                <div>
                <div>
                    <p className="mt-3">Australia v England</p>
                    <p className="mt-3">New Zealand v India</p>
                    <p className="mt-3">Sri Lanka v Afghanistan</p>
                    <p className="mt-3">Australia v West Indies</p>
                    <p className="mt-3">West Indies v England (W)</p>
                    <p className="mt-3">Ireland v Pakistan (W)</p>
                    <Link to="/QATrophy">
                    <p className="mt-3">QEA Trophy</p></Link>
                    <p className="mt-3">WBBL 2022</p>
                    <p className="mt-3">Marsh Cup</p>
                    <p className="mt-3">Sheffield Shield</p>
                    <p className="mt-3">CSA 4-Day Series</p>
                    <p className="mt-3">World Test Championship</p>
                    <p className="mt-3">World Cup Super League</p>
                </div>
                </div>
            </div>
            <div>
                <p className="border-b pr-4 py-3 font-bold">Quick Links</p>
                <div>
                <div>
                    <p className="mt-3">T20 Timeout</p>
                    <p className="mt-3">T20 Time Out</p>
                    <p className="mt-3">Fantasy Pick</p>
                    <p className="mt-3">ICC Rankings</p>
                </div>
                </div>
            </div>
            <div>
                <p className="border-b pr-4 py-3 font-bold">ESPNcricinfo Apps</p>
                <div>
                <div>
                    <p className="mt-3">Android App</p>
                    <p className="mt-3">iOS App</p>
                </div>
                </div>
            </div>
            <div>
                <p className="border-b pr-4 py-3 font-bold">Follow ESPNcricinfo</p>
                <div>
                <div>
                    <p className="mt-3">Instagram</p>
                    <p className="mt-3">Twitter</p>
                    <p className="mt-3">Facebook</p>
                    <p className="mt-3">YouTube</p>
                </div>
                </div>
            </div>
            <div>
                <p className="border-b pr-4 py-3 font-bold">ESPN Sites</p>
                <div>
                <div>
                    <p className="mt-3">The Cricket Monthly</p>
                    <p className="mt-3">ESPN</p>
                </div>
                </div>
            </div>
           </div>
        </div>
        <div className=" bg-gray-200">
            <div className="container mx-auto flex justify-between py-4 items-center">
            <p>Terms of Use|Privacy Policy|Interest-Based Ads|Feedback</p>
            <p>© 2022 ESPN Sports Media Ltd. All rights reserved</p>
            </div>
        </div>
    </>
    );
}
export default Footer;