import React from 'react';
import Base from '../components/Base';

const Signup = () => {
        return (
                <div>
                        <Base />
                        <div className="col-md-4 offset-sm-7 text-left px-5 py-3">
                                <h1 className="text-center">Sign Up here</h1>
                        </div>

                        <div className="row">
                                <div className="col-md-4 offset-sm-7 text-left px-5 mb-5">
                                        <form>
                                                <div className="form-group py-2">
                                                        <label className="text-dark py-1">Name</label>
                                                        <input className="form-control" type="text" />
                                                </div>
                                                <div className="form-group py-2">
                                                        <label className="text-dark py-1">Email</label>
                                                        <input className="form-control" type="email" />
                                                </div>
                                                <div className="form-group py-2">
                                                        <label className="text-dark py-1">Password</label>
                                                        <input className="form-control" type="password" />
                                                </div>
                                                <button className="btn btn-success btn-block mt-2 py-2">Sign Up</button>
                                        </form>
                                </div>
                        </div>
                </div>
        )
}

export default Signup;