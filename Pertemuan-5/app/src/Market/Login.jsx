import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className='container mt-5'>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow border-0">
                        <div className="card-body">
                            <h1 className='text-center'>Login</h1>
                            <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" className='form-control' id='username' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className='form-control' id='password' />
                            </div>
                            <br />
                            <div className="text-center">
                                <button className="btn btn-success" onClick={props.onClick}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login