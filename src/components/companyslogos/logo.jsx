import React from "react";
import { logodata } from "../data/logodata";

const Logo=()=>{
    const fimage=logodata.slice(0,8)
    return(
        <div className="prosection">
            {
                fimage.map((item)=>{
                    return(
                        <div className="imgbox">
                            <img className="proimage" src={item.image} alt="image logo" />
                        </div>
                    )
                })
            }
        </div>

    )
}
export default Logo