import React from "react"
import "./contactbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope ,faenvelope} from '@fortawesome/free-solid-svg-icons'
const ContactBar = () => {
    return (
        <section id="ContactPage">

            <h1 className="custext">Board of Directors</h1>
            <div className="boradteam">
                <img src="./Albums/Board/11.png" className="imgboardp" id="person1" alt="BaordTeam" />
                <img src="./Albums/Board/12.png" className="imgboardp" alt="BaordTeam" />
                <img src="./Albums/Board/13.png" className="imgboardp" id="person3" alt="BaordTeam" />
            </div>
            <div className="contactdetails" id="contactid">
                <h1 className="custext">Contact US</h1>
            </div>
            <div className="contactman" id="originaldiv">
                <div className="leftsalesman">
                    <div className="formgmailsubmit">
                        <h1 className="guideuser1">Get in Touch</h1>
                        <div className="formdiv">
                            <form action="https://api.web3forms.com/submit" method="POST" className="fomdivbox">
                                <input type="hidden" name="access_key" value="e48ef01e-c3c5-414d-b495-b6c744b389ba" />
                                <input type="text" className="namebox" name="name" placeholder="Your Name" required /><br />
                                <input type="text" className="mailbox" name="email" placeholder="Your Email" required /><br />
                                <textarea name="message" placeholder="Your Massage" className="detailmsg" required></textarea>
                                <input type="submit" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="rightaddress">
                    <div className="divuser">
                        <h1 className="guideuser">Please Contact our Sr.Sales Representative to Schedule a Demonstration</h1>
                    </div>
                    <div className="salesman">
                        <img src="./Albums/Board/dp2.jpg" className="picsales" alt="picture" />
                        <div className="detailslist">
                            <h1 className="nameperson"><img src="./Albums/salesman/2.png" className="mailpng" alt="" />Chennababu Yeturi</h1>
                            <h1 className="desig"><img src="./Albums/salesman/3.png" className="mailpng" alt="" />Marketing and Sales Manegement</h1>
                            <h1 className="emailp"><img src="./Albums/salesman/4.png" className="mailpng" alt="" />chennababuyeturi1@gmail.com</h1>
                            <h1 className="callnum"><img src="./Albums/salesman/1.png" className="mailpng" alt="" />9849849613</h1>
                        </div>
                    </div>
                    <div className="addresstexts">
                        <h1 className="texthead">Address:</h1>
                        <p className="adddetail">Office No. 302, 3rd Floor, Babukhan Mall, Circle, Greenlands Rd, Somajiguda, Hyderabad, Telangana 500016</p>
                        <h1 className="texthead">Phone:</h1>
                        <p className="adddetail">08048031148</p>
                    </div>
                    <div className="mapdiv">
                        <p className="locationmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.64701642889!2d78.45194625122026!3d17.42871948161031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b459eb8fd1%3A0xc241a16c26f828a2!2sUSK%20Electronics%20private%20limited!5e0!3m2!1sen!2sin!4v1724830657122!5m2!1sen!2sin"
                            width="450" height="300" className="mapbox" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="contactman" id="duplicatedivcontact">
                <div className="leftsalesman">
                    {/* 1st div */}
                    <div className="divuser">
                        <h1 className="guideuser">Please Contact our Sr.Sales Representative to Schedule a Demonstration</h1>
                    </div>
                    <div className="salesman">
                        <img src="./Albums/Board/dp2.jpg" className="picsales" alt="picture" />
                        <div className="detailslist">
                            <h1 className="nameperson"><img src="./Albums/salesman/2.png" className="mailpng" alt="" />Chennababu Yeturi</h1>
                            <h1 className="desig"><img src="./Albums/salesman/3.png" className="mailpng" alt="" />Marketing and Sales Manegement</h1>
                            <h1 className="emailp"><img src="./Albums/salesman/4.png" className="mailpng" alt="" />chennababuyeturi1@gmail.com</h1>
                            <h1 className="callnum"><img src="./Albums/salesman/1.png" className="mailpng" alt="" />9849849613</h1>
                        </div>
                    </div>
                    <div className="addresstexts">
                        <h1 className="texthead">Address:</h1>
                        <p className="adddetail">Office No. 302, 3rd Floor, Babukhan Mall, Circle, Greenlands Rd, Somajiguda, Hyderabad, Telangana 500016</p>
                        <h1 className="texthead">Phone:</h1>
                        <p className="adddetail">08048031148</p>
                    </div>
                    <div className="mapdiv">
                        <p className="locationmap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.64701642889!2d78.45194625122026!3d17.42871948161031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b459eb8fd1%3A0xc241a16c26f828a2!2sUSK%20Electronics%20private%20limited!5e0!3m2!1sen!2sin!4v1724830657122!5m2!1sen!2sin"
                            width="450" height="300" className="mapbox" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                    </div>
                    {/*  */}
                </div>
                <div className="rightaddress">
                    {/* touch */}
                    <div className="formgmailsubmit">
                        <h1 className="guideuser1">Get in Touch</h1>
                        <div className="formdiv">
                            <form action="https://api.web3forms.com/submit" method="POST" className="fomdivbox">
                                <input type="hidden" name="access_key" value="e48ef01e-c3c5-414d-b495-b6c744b389ba" />
                                <input type="text" className="namebox" name="name" placeholder="Your Name" required /><br />
                                <input type="text" className="mailbox" name="email" placeholder="Your Email" required /><br />
                                <textarea name="message" placeholder="Your Massage" className="detailmsg" required></textarea>
                                <input type="submit" className="btn btn-success" />
                            </form>
                        </div>
                    </div>
                    {/*  */}

                </div>
            </div>
            {/*  */}
            <div className="footerdiv">
                <h1 className="develop">Developed by<span className="developername">Vishal Singu</span></h1>
                <h1 className="devlopercont">Contact <span className="developername">Me</span></h1>
                <h1 className="devddd">Let's Work Together</h1>
                <h1 className="devddd">singuvishal491@gmail.com</h1>
                <h1 className="devddd" id="vishal">+91 9959582504</h1>
            </div>
        </section>
    )
}
export default ContactBar