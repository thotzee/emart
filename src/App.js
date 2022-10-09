
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
import Navbar2 from './component/Navbar2';
import Products2 from './component/Products2';
import Home2 from './component/Home2';


function App() {
  return (
    <>
      <Navbar2 />
    <Routes>
      <Route exact path="/emart" element={<Home2/>}/>
      <Route exact path="/products" element={<Products2/>}/>
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
