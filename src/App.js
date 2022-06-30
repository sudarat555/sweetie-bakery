import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Order from './containers/order/Order';
import Product from './containers/product/Product';
// import NotFound from './containers/error/NotFound';
// import AddProduct from './containers/product/AddProduct';
// import EditProduct from './containers/product/EditProduct';

class App extends Component {
    renderRouter(){
      return(
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/order" element={<Order/>}/>
          <Route exact path="/product" element={<Product/>}/>
          {/* <Route exac path="/product/addproduct" element={<AddProduct/>}/>
          <Route exac path="/product/editproduct" element={<EditProduct/>}/>
          <Route element={<NotFound/>}/> */}
        </Routes>
      );
    }

    render(){
      return(
        <BrowserRouter>{this.renderRouter()}</BrowserRouter> 
      );
    }
}

export default App;
