// import "../data/product";
import React, { Component } from "react";

class ProductItem extends Component{
    constructor(props){
        super(props);
        console.log('constructor|'+props.productName)
    }
    render(){
        const {productName, unitPrice, thumbnail} = this.props.product;
        return(
            <div className="col-md-3 col-sm-6 cardbox">
                <img className="img-fluid img-thumbnail item" src={thumbnail} alt=""/>
                <div className="box">
                    <h5 className="mt-2">{productName}</h5>
                    <p className="title text-right">{unitPrice} THB</p>
                </div>
                {this.props.onAddOrder &&
                    <button className="btn btn-block btn-secondary btn-buy title" value={unitPrice} onClick={() => this.props.onAddOrder(this.props.product)} >
                        ซื้อ
                    </button>
                }
                {this.props.onEditProduct &&
                    <button className="btn btn-warning col-5 title" onClick={() => this.props.onEditOrder(this.props.product)}>
                        แก้ไข
                    </button>
                }
                {this.props.onDelProduct &&
                    <button className="btn btn-danger float-right col-5 title" onClick={() => this.props.onDelProduct(this.props.product)}>
                        ลบ
                    </button>
                }
                <hr/>
            </div>
        );
    }
}

export default ProductItem