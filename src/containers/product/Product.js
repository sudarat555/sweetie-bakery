import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/product/ProductList";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useState } from "react-router-dom";
// import { useLocation, useNavigate, useParams } from "react-router-dom";

class Product extends Component {
    constructor(props){
        super(props)
        this.state = { Products : null };
        this.delProduct = this.delProduct.bind(this)
        // this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount(){
        axios.get("http://localhost:3001/products").then(res => {
                this.setState({products: res.data});
            }
        )
    }

    delProduct(product){
        axios.delete("http://localhost:3001/products/"+product.id).then(res => {
            axios.get("http://localhost:3001/products").then(res => {
                    this.setState({products: res.data});
                }
            )
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <hr/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <h1>สินค้า</h1>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success align-right"><Link to="/product/addproduct">เพิ่ม</Link></button>
                            </div>
                        </div>
                        <ProductList products={this.state.products} onEditProduct={this.editProduct} onDelProduct={this.delProduct}/>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Product;