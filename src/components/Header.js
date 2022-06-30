import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = { date: new Date() };
    }
    
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate(){

    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({ date: new Date() });
    }

    render(){
        const style = {height: 30};
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="text-left">
                        <h1 className="header"><img style={style} src="/images/cake.png" alt=""/>{" "} Sweetie Bakery{" "}</h1>
                    </div> 
                    <div className="text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item title"><Link to="/">Home</Link></li>
                            <li className="list-inline-item title"><Link to="/">|</Link></li>
                            <li className="list-inline-item title"><Link to="/order">Order</Link></li>
                            <li className="list-inline-item title"><Link to="/">|</Link></li>
                            <li className="list-inline-item title"><Link to="/product">Product</Link></li>
                            <li className="list-inline-item title"><Link to="/">|</Link></li>
                            <li className="list-inline-item title"><Link to="/about">About us</Link></li>
                        </ul>
                    </div>
                    <div className="text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>       
                </div> 
            </div>
        );
    }
}

export default Header