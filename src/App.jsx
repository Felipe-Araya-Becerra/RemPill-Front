import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Homepage from "./components/HomePage";
import Rememberpage from "./components/RememberPage"
import CreateRemember from "./components/CreateRemember";
import CreateData from "./components/CreateData";
import HipertensionModule from "./components/HipertensionModule";
import DiabetesModule from "./components/DiabetesModule";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="remember" element={<Rememberpage/>}></Route>
            <Route path="createrem" element={<CreateRemember/>}></Route>
            <Route path="updaterem/:id" element={<CreateRemember/>}></Route>
            <Route path="createdata" element={<CreateData/>}></Route>
            <Route path="updatedata/:id" element={<CreateData/>}></Route>
            <Route path="hiper" element={<HipertensionModule/>}></Route>
            <Route path="diabetes" element={<DiabetesModule/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
