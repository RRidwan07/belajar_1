import Card from "./Component/Card/Card";
import { Navbar } from "./Component/Navbar/Navbar";
import {Home} from "./Package/Home";
import {Landing} from "./Package/Landing";
import {BrowserRouter, Route, Routes, } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    {
      !'/' ? <Navbar className="on"/> : <Navbar className="of"/>
    }
      <Routes>
        <Route path="/" exact element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/card/:id" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
