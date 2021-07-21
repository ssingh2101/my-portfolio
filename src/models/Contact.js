import { useForm } from "@formcarry/react";
import { useState } from "react";
import Base from "../components/Base";
import Footer from "../components/Footer";
import "./contact.css"




const Contact = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");

     const { state, submit } = useForm({
          id: '0x1uOObCvUj'
     });

     const isStringNonEmpty = (string) => {
          console.log(state);
          return string.length > 0 && string !== ""
     }

     const isEmailValid = email => {
          return email.includes("@") && email.includes(".")
     }

     return (
          <div className="contact">
               <Base />
               <div className="container py-3">
                    <div className="row">
                         <div className="col-sm text-center">
                              <h1 className="div-heading display-4">Get In Touch</h1>
                         </div>
                    </div>
                    <div className="row  py-3">
                         <div className="col-sm-5 py-2">
                              <form onSubmit={submit}>
                                   <div className="form-group">
                                        <input type="name" onChange={e => setName(e.target.value)} className="form-control" placeholder="Your Full Name..." name="fullName" value={name} required />
                                   </div>
                                   <div className="form-group">
                                        <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..." name="email" value={email} required />
                                   </div>

                                   <div className="form-group">
                                        <textarea rows="5" onChange={e => setMessage(e.target.value)} className="form-control" aria-label="With textarea" name="message" value={message} required></textarea>
                                   </div>
                                   <button type="submit" className="btn btn-dark btn-lg " data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
                              </form>
                         </div>


                         <div className="col-sm-1  py-2 address">
                              <h5 className=" addr-field">Address: </h5>
                              <h5 className=" addr-field">Email: </h5>
                              <h5 className=" addr-field">Contact: </h5>
                         </div>
                         <div className="col-sm-5  py-2 mb-5 address">
                              <h5 className=" addr-field"><small className="text-muted">Sector-V, Salt Lake City, Kolkata - 700091</small></h5>
                              <h5 className=" addr-field"><small className="text-muted">sandeepsingh96082@gmail.com</small></h5>
                              <h5 className=" addr-field"><small className="text-muted">+91 98307 94858, +91 62903 71624</small></h5>
                         </div>

                         {isStringNonEmpty(name) && isStringNonEmpty(email) && isStringNonEmpty(message) && isEmailValid(email) && <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered" role="document">
                                   <div className="modal-content">
                                        <div className="modal-header">
                                             <h5 className="modal-title" id="exampleModalLongTitle">Sent Successfully</h5>
                                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                  <span aria-hidden="true">&times;</span>
                                             </button>
                                        </div>
                                        <div className="modal-body">
                                             Your message has been sent Successfully!!!
                                        </div>
                                        <div className="modal-footer">
                                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                   </div>
                              </div>
                         </div>}

                    </div>
               </div>
               <Footer />
          </div>
     )
}

export default Contact;