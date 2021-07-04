import React from 'react';
import Base from '../components/Base';
import roofimg from "../assets/roof-removebg-preview.png"
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"


const About = () => {
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
                         <div className="col-sm-5 py-2 aboutimg">
                              <img src={roofimg} style={{ backgroundPosition: "center", marginLeft: "40px", height: "75%" }} />
                         </div>
                         <div className="col-sm-6  ">
                              <h2>A B O U T</h2>
                              <hr />

                              <p style={{ fontFamily: "monospace" }}>Hello, World!<br />
                                   My name is Sandeep, a Software developer with experience in Java, JavaScript, HTML/CSS,
                                   Node Js, Mongo db and React. I have a background in architecture with a focus on managing data ecosystem.
                                   I have had a fascination for building things since I was young, from arts and
                                   crafts to assembling built-construction.</p>
                              <p style={{ fontFamily: "monospace" }}>In 2015, I found my new passion in programming, and it aligns with my true interest in analytical thinking and problem solving. I began my journey from
                                   freeCodeCamp and hackerrank platform to enrolling myself in the Software Engineering program. I believe the core principles of architecture
                                   and my background in mathematics will be a good catalyst to my growth in the field of programming. I am excited to contribute my skills and past experiences to
                                   this new journey!</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default About;