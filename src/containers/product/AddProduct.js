import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

const AddProduct = () => {
    const [image,setImage] = useState([])
    const [imageURL,setImageURL] = useState([])

    useEffect(() => {
        if(image.length < 1){
            return;
        }
        const newImageURL = []
        image.forEach((image) => newImageURL.push(URL.createObjectURL(image)))
        setImageURL(newImageURL)
    },[image])

    function onImageChange(e){
        setImage([...e.target.files])
    }
    return (
        <div className="container-fluid">
            <Header />
            <hr />
            <center>
                <div className="row">
                    <form action="">
                        <div className="col-md-8">
                            <h2 className="text-center">เพิ่มสินค้า</h2>
                            <div className="col-md-4 mt-4">
                                <label htmlfor="name" className="form-label">ชื่อสินค้า : </label>
                                <input type="text" className="form-control" placeholder="ชื่อสินค้า" />
                            </div>
                            <div className="col-md-4 mt-4">
                                <label htmlfor="price" className="form-label">ราคาสินค้า : </label>
                                <input type="number" className="form-control" placeholder="ราคาสินค้า" />
                            </div>
                            <div className="col-md-4 mt-4">
                                    <label htmlfor="img" className="form-label mr">ภาพประกอบ : </label>
                                    <input type="file" multiple accept="image/*" onChange={onImageChange}></input>
                                    {imageURL.map((imageSrc,idx) => (<img key={idx} className="mt" width="250" height="250" src={imageSrc}/>))}
                            </div>
                            <div className="mt text-center">
                                <button type="submit" className="btn btn-success">บันทึกข้อมูลสินค้า</button>
                            </div>
                        </div>
                    </form>
                </div>
            </center>
            <Footer />
        </div>
    )
}

export default AddProduct