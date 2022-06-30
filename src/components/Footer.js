import React from "react";

const Footer = () => {
    const company = "Janesdr";
    const email = "jane.sernthaisong@gmail.com"
    return(
        <div className="container-fluid">
            <hr/>
            <div className="text-center title text-uppercase">
                <span className="text-danger">Powered By</span> {company} | <span className="text-danger">Contact By Email </span>{email}
            </div>
        </div>
    )
}

export default Footer