// import React,{useState} from "react"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import "./navbar.css"
import Products from "../shopproducts/products"
import HomeDesign from "../design/homedesign"

const Navbar=()=>{
    // const navigate=useNavigate();
    return(
            <section className="navdiv">
                <div className=" h-navbar">
                    <div className="h-container">
                        <img src="./Albums/logousk.png" className="logoimg" alt="Image logo" width={140}/>
                    </div>
                    <div className="h-menu">
                            <a href="#" className="btntag ">Home</a>
                            <a href="#theatorpage" className="btntag ">Theatres</a>
                            <a href="#pageproduct" className="btntag ">Products</a>
                            <a href="#3dpage" className="btntag ">3D Theator</a>
                            <a href="#autopage" className="btntag ">Home Automation</a>
                            <a href="#ContactPage" className="btntag ">Directors</a>
                    </div>
                    <div className="contactbtn">
                        <a href="#contactid" className="btn btn-primary contacttag">Contact<span><img src="" width={40}/></span></a>
                    </div>
                </div>
            </section>
    )
}
export default Navbar