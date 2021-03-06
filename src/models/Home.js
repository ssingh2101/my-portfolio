import React from 'react';
import Base from '../components/Base';
import myphoto from "../assets/IMG_E0164-removebg-preview.png"
import doticon from "../assets/circle-cropped.png"
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import "./home.css"
import Footer from '../components/Footer';


const Home = () => {
     return (
          <div className="home">
               <Base />
               <div className="container">
                    <div className="row">
                         <div className="col-sm-6 mt-4">
                              <h3>Hello.</h3>
                              <br />
                              <br />
                              <br />
                              <div className="px-5 home-para">
                                   <img className="el-icon " src={doticon} width="50px" alt="just an icon." />
                                   <p className="el-icon">
                                        <span className="el-icon-title">I'm Sandeep Singh.</span>
                                   </p>
                                   <h1 >I'm a Software Developer.</h1>
                                   <h1>Based in India.</h1>
                                   <br />
                                   <code>&lt;&nbsp;Voracious Learner&nbsp;/&gt;</code>
                              </div>
                         </div>
                         <div className="col-sm-3 photo mt-5" >
                              <img className="photoedit" src={myphoto} alt="MyPhoto" />
                         </div>
                         <div className="col-sm-2 ">
                              <ul id="contact" className="rotate " >
                                   <li className="show-inline"><a href="https://twitter.com/Sandy96082" ><FaTwitter /></a></li>
                                   <li className="show-inline"><a href="https://github.com/ssingh2101" ><FaGithub /></a></li>
                                   <li className="show-inline"><a href="https://www.linkedin.com/in/sandeep-singh-93a79413b/" ><FaLinkedin /></a></li>
                                   <li className="show-inline"><a href="https://m.facebook.com/100002760355741/" ><FaFacebook /></a></li>
                                   <li className="show-inline"><a href="https://www.instagram.com/sandeepsingh96082/" ><FaInstagram /></a></li>
                              </ul>
                         </div>
                    </div>
               </div>
               <Footer />

          </div>
     )
}

export default Home;