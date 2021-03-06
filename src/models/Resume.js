import React from 'react';
import Base from '../components/Base';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaDev } from "react-icons/fa"
import "./resume.css"
import Footer from '../components/Footer';


const Resume = () => {
     const imageURL = `https://source.unsplash.com/430x500/?laptop,desk,random=${Math.random()}`;
     return (
          <div className="resume">
               <Base />
               <div className="container mb-5">
                    <div className="row py-3">
                         <div className="col-sm-1">
                              <ul id="contactinabout" className="rotate hidecontact" >
                                   <li><a href="https://twitter.com/Sandy96082" ><FaTwitter /></a></li>
                                   <li><a href="https://github.com/ssingh2101" ><FaGithub /></a></li>
                                   <li><a href="https://www.linkedin.com/in/sandeep-singh-93a79413b/" ><FaLinkedin /></a></li>
                                   <li><a href="https://m.facebook.com/100002760355741/" ><FaFacebook /></a></li>
                                   <li><a href="https://www.instagram.com/sandeepsingh96082/" ><FaInstagram /></a></li>
                              </ul>
                         </div>
                         <div className="col-sm-5 py-3 aboutimg">
                              <img className="resumeimg" src={imageURL} alt="Desk" />
                         </div>
                         <div className="col-sm-6 resumedesc " style={{ display: "inline-block" }}>
                              <h2>R E S U M E</h2>
                              <hr />
                              <h5>CURRENT STATUS</h5>
                              <p>I am working as a software developer with a experience of more than 2 years.</p>
                              <p >While  my <a href="https://drive.google.com/file/d/1HcNO0OCMPsJmEAfO814LsAzTGsECE3_F/view?usp=sharing" style={{ textDecoration: "underline" }}>resume</a> and <a href="https://www.linkedin.com/in/sandeep-singh-93a79413b/"><FaLinkedin /></a> convey my past experience, I am currently busy hustling on:<br /></p>
                              <ul className="alt">
                                   <p>
                                        <li>Taking a deep dive into ReactJS and Redux</li>
                                        <li>
                                             Doing #365 Days of Code challenge, follow my journey on <a target="blank" href="https://twitter.com/Sandy96082" style={{ fontSize: "1.2em" }}  ><FaTwitter /></a>
                                        </li>
                                        <li>
                                             Improving my technical writing skills on <a href="https://dev.to/ssingh2101" style={{ fontSize: "1.2em", paddingTop: "50px" }} ><FaDev /></a>
                                        </li>
                                        <li>
                                             Self-learning DSA with <a href="https://www.amazon.in/gp/product/8192107558/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1" style={{ textDecoration: "underline" }}>Data Structures and Algorithms Made Easy in JAVA</a>
                                        </li>
                                   </p>
                              </ul>

                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     )
}

export default Resume;