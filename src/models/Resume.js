import React from 'react';
import Base from '../components/Base';
import desk from "../assets/desk.jpg"
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram, FaDev } from "react-icons/fa"
import "./resume.css"


const Resume = () => {
     return (
          <div>
               <Base />
               <div className="container mb-5">
                    <div className="row py-3">
                         <div className="col-sm-1">
                              <ul id="contactinabout" className="rotate" >
                                   <li><a href="https://twitter.com/Sandy96082" ><FaTwitter /></a></li>
                                   <li><a href="https://github.com/ssingh2101" ><FaGithub /></a></li>
                                   <li><a href="https://www.linkedin.com/in/sandeep-singh-93a79413b/" ><FaLinkedin /></a></li>
                                   <li><a href="https://m.facebook.com/100002760355741/" ><FaFacebook /></a></li>
                                   <li><a href="https://www.instagram.com/sandeepsingh96082/" ><FaInstagram /></a></li>
                              </ul>
                         </div>
                         <div className="col-sm-5 py-3 aboutimg">
                              <img src={desk} width="80%" height="90%" style={{ backgroundPosition: "center center", marginLeft: "40px" }} />
                         </div>
                         <div className="col-sm-6  " style={{ display: "inline-block" }}>
                              <h2>R E S U M E</h2>
                              <hr />
                              <h5>CURRENT STATUS</h5>
                              <p>I am working as a software developer with a experience of more than 2 years.</p>
                              <p >While <a href="https://drive.google.com/file/d/1dGFBEQW8ugQDmP5JF20sh268TUSJtPGG/view?usp=sharing" style={{ textDecoration: "underline" }}>my resume</a> and <a href="https://www.linkedin.com/in/sandeep-singh-93a79413b/"><FaLinkedin /></a> convey my past experience, I am currently busy hussling on:<br /></p>
                              <ul className="alt">
                                   <p>
                                        <li>Taking a deep dive into ReactJS and Redux</li>
                                        <li>
                                             Doing #365DaysofCode challenge, follow my journey on <a target="blank" href="https://twitter.com/Sandy96082" style={{ fontSize: "1.2em" }}  ><FaTwitter /></a>
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
          </div>
     )
}

export default Resume;