import React from "react"
import './scrolldiv.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { theatordata } from "../data/Theatordata"
const ScrollDivbar = () => {
    var settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    var settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    var settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false
    };
    return (
        <>
            <div className="headingdiv">
                <h1 className="textheaddiv">Recent Projects</h1></div>
            <div className="scrolldiv">

                <div className="containerin1">
                    <Slider {...settings1}>
                        {theatordata.map((d) => (
                            <div className="innerdiv">
                                <div className="imgindiv">
                                    <img src={d.image} className="imgboxdiv" />
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
                <div className="containerin2">
                    <Slider {...settings2}>
                        {theatordata.map((d) => (
                            <div className="innerdiv">
                                <div className="imgindiv">
                                    <img src={d.image} className="imgboxdiv" />
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
                <div className="containerin3">
                    <Slider {...settings3}>
                        {theatordata.map((d) => (
                            <div className="innerdiv">
                                <div className="imgindiv">
                                    <img src={d.image} className="imgboxdiv" />
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default ScrollDivbar