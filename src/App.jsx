import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Fullart from "./pages/Fullart";
import Fanart from "./pages/Fanart";
import Yamato from "./pages/Yamato";
import Sketch from "./pages/Sketch";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fullart" element={<Fullart />} />
        <Route path="/fanart" element={<Fanart />} />
        <Route path="/yamato" element={<Yamato />} />
        <Route path="/sketch" element={<Sketch />} />
      </Routes>
    </Router>
  );
}

export default App;
