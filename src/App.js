import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Domains from "./pages/Domains";

function App() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // development build code
    console.log("dev environment")
  } else {
    // production build code
    console.log("prod environment")
  }

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/domains" element={<Domains/>}/>
      </Routes>
    </div>
  );
}

export default App;
