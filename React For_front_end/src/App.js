import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import Home from "./components/Home";


function App() {
  return (
    <>
   
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        
        
        
      </Routes>
      
    </>
  );
}

export default App;
