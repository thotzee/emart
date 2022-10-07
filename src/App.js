
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Login from "./component/Login";
import Register from "./component/Register";
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route exact path="/emart" element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
