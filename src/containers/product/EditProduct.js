import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import { useState, useEffect } from "react";

const EditProduct = () => {
    return (
        <div className="container-fluid">
            <Header />
            <hr />
            <div className="col-md-8">
                <div className="row">
                    <form action="">
                        <h2 className="text-center">แก้ไขข้อมูลสินค้า</h2>
                        <div className="col-md-4 mt4">
                            <label htmlFor="productName" className="form-label">ชื่อสินค้า</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="unitPrice" className="form-label">ราคาสินค้า</label>
                            <input type="number" className="form-control"/>
                        </div>
                        <div className="col-md-4 mt-4">
                            <label htmlFor="thumbnail" className="form-label">ภาพประกอบ</label>
                            <input type="file" multiple accept="image/*" className="form-control"/>
                        </div>
                        <div className="col-md-4 align-center">
                            <button className="btn btn-success" type="submit">อัพเดตข้อมูล</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EditProduct