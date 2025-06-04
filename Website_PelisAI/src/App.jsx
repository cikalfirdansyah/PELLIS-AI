import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Detect from "./pages/Detect";
import About from "./pages/About";

function App() {
  return (
    <div >
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detect" element={<Detect />} />
          <Route path="/About" element={<About />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
