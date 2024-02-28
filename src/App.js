import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Shop } from "./pages/Shop";
import { ContactUs } from "./pages/ContactUs";
import { Mens } from "./pages/Mens";
import { Womens } from "./pages/Womens";
import { Kids } from "./pages/Kids";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
