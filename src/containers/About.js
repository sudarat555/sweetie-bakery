import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const About = () => {
    const [name, setName] = useState("...")
    return(
        <div>
            <Header/>
            <hr/>
            <div className="container col-md-5">
                <h3>Hello everyone !</h3>
                <p className="text-justify mt-4 mb-4">
                    Welcome to Sweetie Bakery 
                </p>
                <h4 className="text-success">From Sweetie Bakery</h4>
                <p>{name}</p>
                <button className="btn btn-primary" onClick={()=>setName(<img src="/images/555.jpg"></img>)}>Thank you !</button>
            </div>
            <Footer/>
        </div>
    )
}

export default About