import LandingPage from "./container/LandingPage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Result from "./container/Resul";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/QATrophy" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

export default App;
