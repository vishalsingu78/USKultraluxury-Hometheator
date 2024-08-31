import React from "react"
import "./homedesign.css"

const HomeDesign=()=>{
    return(
            <section id="theatorpage">
                <div className="mainpage4">
                    <div className="leftbox">
                        <div className="design">
                            <h1 className="namedesign">Home Theater Design</h1>
                            <span className="textsentance">Welcome to Home Theater Central. In addition to our 
                                world-class design tool, this page is 
                                packed with everything you need to begin 
                                your home theater journey.
                            </span>
                            <ul className="listbox">
                                <li className="bullets">3D Interactive Home Theater Designer</li>
                                <li className="bullets">Home Theater Design & Buyer Guides</li>
                                <li className="bullets">Video Showcases of Home Theater Installs</li>
                                <li className="bullets">Home Theater Image Inspiration Gallery</li>
                                <li className="bullets">Home Theater Products</li>
                                <li className="bullets">Revelation Home Theater Seating</li>
                                <li className="bullets">Professional Design & Installation</li>
                            </ul>
                        </div>        
                    </div>
                    <div className="rightbox">
                        <div className="imagebox">
                            <img src="./Albums/hometheator.jpg" className="homeimg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
    )}
export default HomeDesign