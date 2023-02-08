import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Jewelry from './Pages/Jewelry'
import Electronics from './Pages/Electronics'

import MensClothing from './Pages/Mens_clothing'
import WomensClothing from './Pages/Womens_clothing'
import Product from './Pages/Product';
import Login from './Pages/Login';
function App() {
  
  return (
   <div>
       
    
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelry />} />
        <Route path="/mensclothing" element={<MensClothing />} />
        <Route path="/womensclothing" element={<WomensClothing />} />
        <Route path="/Product" element={<Product />} />

      </Routes>
   </div>
  );
}

export default App;
