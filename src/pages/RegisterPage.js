import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/register.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto body-container">
            <h2 className='signup-h2'>SIGN UP </h2>
            <form action="/home">
                <p>
                    <label><em>Username</em></label><br/>
                    <input type="text" name="first_name" className="input-box"  required />
                </p>
                <p>
                    <label><em>Email address</em></label><br/>
                    <input type="email" name="email" className="input-box" required />
                </p>
                <p>
                    <label><em>Password</em></label><br/>
                    <input type="password" name="password" className="input-box"  required />
                </p>
           
                <p>
                    <button id="sub_btn" type="submit" to="/landing">Register</button>
                </p>
            </form>
        </div>
    )

}
