import Card from "./Component/Card/Card";
import { Navbar } from "./Component/Navbar/Navbar";
import Homee from "./Package/Home";
import {Landing} from "./Package/Landing";
import {HashRouter, Route, Routes, } from "react-router-dom"
import ProfileSlide from './Component/Component/ProfileSlide'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        <Route path="/home" element={<Homee />}/>
        <Route path="/card/:id" element={<Card />} />
        <Route path="/Profile" element={<ProfileSlide/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
