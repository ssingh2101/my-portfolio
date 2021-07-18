import Base from "../components/Base";
import Footer from "../components/Footer";
import "./contact.css"




const Contact = () => {
     return (
          <div>
               <Base />
               <div className="container py-3">
                    <div className="row">
                         <div className="col-sm text-center">
                              <h1 className="div-heading display-4">Get In Touch</h1>
                         </div>
                    </div>
                    <div className="row  py-5">
                         <div className="col-sm-5 py-2">
                              <form>
                                   <div className="form-group">
                                        <input type="name" className="form-control" id="inputName" placeholder="Your Full Name..." />
                                   </div>
                                   <div className="form-group">
                                        <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Your Email Address..." />
                                   </div>

                                   <div className="form-group">
                                        <textarea rows="5" className="form-control" aria-label="With textarea"></textarea>
                                   </div>
                                   <button type="submit" className="btn btn-dark btn-lg ">Submit</button>
                              </form>
                         </div>

                         <div className="col-sm-6  py-2 address">
                              <h5>Address: <small className="text-muted">Sector-V, Salt Lake City, Kolkata - 700091</small></h5>
                              <h5>Email: <small className="text-muted">sandeepsingh96082@gmail.com</small></h5>
                              <h5>Contact: <small className="text-muted">+91 98307 94858 || +91 62903 71624</small></h5>
                         </div>

                    </div>
               </div>
               {/* <h1 className="contact">Contact Page will be available soon...</h1> */}
               <Footer />
          </div>
     )
}

export default Contact;