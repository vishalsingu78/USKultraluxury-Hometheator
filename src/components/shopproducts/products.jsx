import React from "react"
// import {Swiper,SwiperSlide,useSwiper} from "swiper-react";
// import "swiper/css";
import { storedata } from "../data/storedata"
import "./products.css"

const Products=()=>{
    return(
            <section id="pageproduct">
                <div className="mainpage3Products">
                    <div className="heading">
                        <h1 className="textshop">Shop Home Theater</h1>
                    </div>
                    <div className="textsentance">
                        <span className="textmatter">From projectors to speakers to furniture, Audio Advice 
                                is the destination for all things home theater. With free shipping, a price guarantee, 
                                and lifetime support, we're happy to answer 
                                questions on chat, on the phone, or in any of our stores.
                        </span><br />
                    </div>
                    <div className="cardwrapper">
                       {
                        storedata.map((card, i)=>(
                            <div key={i}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} className="imgstore" alt="imagestore"/>
                                    <span className="primaryText">{card.name}</span>
                                </div>
                            </div>
                        ))
                       } 
                    </div>
                </div>
                <hr />
            </section>
    )}
export default Products