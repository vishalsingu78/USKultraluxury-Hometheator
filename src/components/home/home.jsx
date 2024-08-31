import React from "react"
import "./home.css"
import {motion} from 'framer-motion';
import CountUp from "react-countup";

const Home=()=>{
    return(
            <section className="mainpage2home">
                <div className="containerhome">
                    <div className="mainpageimage">
                    <img src="./Albums/image1main.jpg" className="homeimg1 mainpage" alt=""/>
                    </div>
                    <div className="wishtag">
                        <motion.h1 className="textfloat" initial={{y:"-4rem",opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{duration:8, type:"spring"}}
                        >WELCOME TO</motion.h1>
                        <motion.span initial={{y:"-2rem",opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{duration:5, type:"spring"}} className="nred"
                        >USK </motion.span>
                                <motion.h1 className="textfloat" initial={{y:"4rem",opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{duration:8, type:"spring"}}
                        >LUXURY HOME CINEMA</motion.h1>
                    </div>
            <div className="containernumber counters">
                    {/* 1st count */}
                    <div className="a1stdiv">
                        <div className="divprojectscount c1">
                            <span className="numberp">
                                <CountUp start={125} end={161} duration={5}/>
                            </span>
                            <span className="plusesign">+</span>
                        </div>
                        
                        <div className="namedivproj">
                            <span className="textname1">Corporate Projects</span>
                        </div>
                    </div>
                    {/* 2nd count*/}
                    <div className="a1stdiv">
                        <div className="divprojectscount c2">
                            <span className="numberp">
                                <CountUp start={15600} end={16000} duration={5}/>
                            </span>
                            <span className="plusesign">+</span>
                        </div>
                        <div className="namedivproj">
                            <span className="textname1">Happy Customers</span>
                        </div>
                    </div>
                    {/* 3rd count*/}
                    <div className="a3rddiv">
                        <div className="divprojectscount c2">
                            <span className="numberp">
                                <CountUp start={6} end={12} duration={5}/>
                            </span>
                            <span className="plusesign">+</span>
                        </div>
                        <div className="namedivproj">
                            <span className="textname1">Awards</span>
                        </div>
                    </div>
            </div>
        </div>
            </section>
    )
}
export default Home