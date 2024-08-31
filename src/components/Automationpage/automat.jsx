import React from "react"
import "./automat.css"

const Automatic = () => {
    return (
        <section id="autopage">
            <div className="AutomaticPageMain">
                <div className="headingauto">
                <h1 className="titlediv">Automation Control System</h1>
                </div>
                <div className="subcontainer">
                    
                    <div className="leftboxauto">
                    <div className="divpicsauto">
                            <img src="./Albums/automation/1d.jpg" className="imgdiva" alt="imgdiv" />
                            <img src="./Albums/automation/5d.jpg" className="imgdiva" alt="imgdiv" />
                            <img src="./Albums/automation/3d.jpg" className="imgdiva" alt="imgdiv" />
                            <img src="./Albums/automation/2d.jpg" className="imgdiva" alt="imgdiv" />
                        </div>
                       
                    </div>
                    <div className="rightboxauto">
                    <div className="div1auto">
                            <img src="./Albums/automation/3s.png" className="imgauto1" alt="" />
                            <h1 className="nameh1">Home Automation</h1>
                            <p className="parap">Let us help you increase the sense of comfort,
                                happiness and peace of mind in your home.</p>
                        </div>
                        <div className="div1auto">
                            <img src="./Albums/automation/2s.png" id="seting" className="imgauto1" alt="" />
                            <h1 className="nameh1">Window Shades</h1>
                            <p className="parap">100% flexible & custom solutions.
                                Integrate your lighting, motorized shades & draperies
                                along with your thermostat, security, and home theater systems.</p>
                        </div>
                        <div className="div1auto">
                            <img src="./Albums/automation/1s.png" className="imgauto1" alt="" />
                            <h1 className="nameh1">Smart Home</h1>
                            <p className="parap">We feature Crestron, Savant, Lutron, RadioRA2,
                                Vantage, and URC processors and lighting controls.
                                Supporting variety of platforms, including the trendy Z Wave & Zigbee.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Automatic