import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css'
import { authContext } from '../../context/UserContext';
// import './css/style-with-prefix.css'

const Login = () => {
    const { userEmailAndPasswordLogIn, googleSignup } = useContext(authContext)
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        userEmailAndPasswordLogIn(email, password)
        event.target.reset()
    }

    //

    const handelGoogleLogin = () => {
        googleSignup()

    }
    return (
        <div className="main-container">
            <div className="form-container">
                <div className="form-body">
                    <h2 className="title">Log in</h2>

                    <form onSubmit={handleLogin} action="" className="the-form">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" />

                        <input type="submit" value="Log In" />

                    </form>
                    <div className="_or">or</div>
                    <div className="social-login">
                        <ul>
                            <li className="google">
                                <button onClick={handelGoogleLogin} className='google-link'>Google</button>
                            </li>
                            <li className="fb">
                                <button className='facebook-link'>Facebook</button>
                            </li>
                        </ul>
                    </div>

                    <div className="form-footer">
                        <div>
                            <span>Don't have an account?</span> <Link className='toggle-link' to="/signup">Sign Up</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;