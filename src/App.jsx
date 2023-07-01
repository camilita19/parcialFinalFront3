import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import './index';
import styles from "./styles/formStyle.css"
import   "./styles/themeMode.css"

function App() {
  return (
    <div className="App">
    
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dentist/:id" element={<Detail/>} />
        <Route path="/favs" element={<Favs/>} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
