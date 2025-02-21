import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./page/Home";
import TutorialPage from "./page/TutorialPage";
import ArtikelPage from "./page/ArtikelPage";
import BacaArtikel from "./page/BacaArtikel";


function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="container mx-auto w-full py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<TutorialPage/>} />
            <Route path="/artikel" element={<ArtikelPage/>} />
            <Route path="/artikel/:id" element={<BacaArtikel />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
