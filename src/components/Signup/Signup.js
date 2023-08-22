import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"
import { authContext } from '../../context/UserContext';

const Signup = () => {
    const { googleSignup, emailAndPasswordSignUp } = useContext(authContext)

    const handelGoogleSignup = () => {
        googleSignup()
    }
    const signUpByEmailAndPassword = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        emailAndPasswordSignUp(name, email, password)
        event.target.reset()
    }


    return (
        <div className="main-container">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Sign Up</h2>
                    <form onSubmit={signUpByEmailAndPassword} action="" className="the-form">

                        <label htmlFor="nam">Name</label>
                        <input type="name" name="name" id="name" placeholder="Enter your name" />

                        {/* <label htmlFor="email">Phone</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" /> */}

                        <label htmlFor="mail">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label htmlFor="word">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <button type="submit" value="Sign Up" >Sign Up</button>

                    </form>
                    <div className="_or">or</div>
                    <div className="social-login">
                        <ul>
                            <li className="google">
                                <button onClick={handelGoogleSignup} className='google-link'>Google</button></li>
                            <li className="fb">
                                <button className='facebook-link'>Facebook</button></li>
                        </ul>
                    </div>
                    <div className="form-footer">
                        <div>
                            <span>Already have an account</span> <Link className='toggle-link' to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;