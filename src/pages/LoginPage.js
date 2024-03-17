import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/bg1.jpg';
import '../styles/login.css';

export default function SignInPage() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/landing");
    };

    return (
        <div className="text-center m-5-auto body-container">
            <h2 className='login-h2'>LOGIN</h2>
            <form action="/home">
                <p>
                    <label><em>Username or email address</em></label>
                    <input type="text" name="first_name" className="input-box" required />
                </p>
                <p>
                    <label><em>Password</em></label>
                    <input type="password" name="password" className="input-box" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleLogin}>Login</button>
                </p>
            </form>
        </div>
    );
}
