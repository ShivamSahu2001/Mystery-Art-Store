import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { About } from "./pages/About/about";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <div className="footer">
        <p className="contact">Contact : 6306677567</p>
        <div className="Email">
        <p className="gmail">E-mail :</p>
        <p>shivamsahu63066@gmail.com</p>
        </div>
        <div className="icons">
        <p>&#169;Shivam Sahu-2023</p>
        <a href="https://www.linkedin.com/in/shivam-sahu-303303216/"><p className="LinkedIn"> <BsLinkedin/></p></a>
        <a href="https://twitter.com/Shivam_Sahu5225"><p className="Twitter"><BsTwitter/></p></a>
        <a href="https://www.instagram.com/shivam_sahu5225/"><p className="Instagram"><BsInstagram/></p></a>
        </div>

      </div>
    </div>
  );
}

export default App;
