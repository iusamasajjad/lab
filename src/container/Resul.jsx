
import Footer from "../components/footer/Footer";
import Navbar from "../components/NavBar/NavBar"

const Result =()=>{
    return(
        <>
        <div>
            <Navbar />
            <h1 style={{height:"50vh"}} className="flex justify-center items-center ">Welcome to Tropy</h1>
           <Footer />
        </div>
        </>
    );
}
export default Result;