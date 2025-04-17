// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Fullart from "./pages/Fullart";
import Fanart from "./pages/Fanart";
import Yamato from "./pages/Yamato";
import Sketch from "./pages/Sketch";

import { CartProvider } from "./redux/CartContext"; // ⭐ 加入 CartProvider
import "./App.css";

function App() {
  return (
    <CartProvider> {/* ⭐ 包住整個應用，讓所有頁面都能使用購物車狀態 */}
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
    </CartProvider>
  );
}

export default App;
