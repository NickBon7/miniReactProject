import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
