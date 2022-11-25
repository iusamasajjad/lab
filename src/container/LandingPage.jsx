import Navbar from "../components/NavBar/NavBar";
import LeftBar from "../components/LeftBar/LeftBar";
import MiddleSec from "../components/MiddleSec/MiddleSec";
import MainScore from "../components/MainScore/MainScore";
import Footer from "../components/footer/Footer";
const LandingPage =()=>{
    return(
    <>
    <div className="fixed top-0 left-0 right-0">
    <Navbar />
    </div>

   <div className="flex w-full container mx-auto mt-16">
   <div className="w-1/4">
   <LeftBar />
   </div>
    <div className="w-2/4 mx-3">
    <MiddleSec />
    </div>
    <div className="w-1/4">
        <MainScore />
    </div>
   </div>
   <div>
    <Footer />
   </div>
    </>
    );
}
export default LandingPage;