import React, { useState } from "react";
import Backendless from "backendless";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/form-styles.css';
import linkStyles from '../styles/link-styles';

function LoginForm() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isHide, setIsHide] = useState(true)
    const currType = 'password'

    const navigate = useNavigate()

    const LogIn = async () => {
        try{
            await Backendless.UserService.login(name, password, true)
            navigate('/account', { replace: true })
        } catch(err) {
            console.log(err)
            alert(err)
        }
    }

    return (
        <div className="form-container">
            <div className="form">
                <div className="form-content">
                    <p>Name</p>
                    <input 
                        type="text" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className="form-content">
                    <p>Password</p>
                    <input 
                        type={isHide? currType: 'text'} 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <div className="show-pass">
                        <p className="show-pass-title">Show pass</p>
                        <input type="checkbox" onChange={event => setIsHide(!event.target.checked)}/>
                    </div>
                </div>
                <div className="submit">
                    <button onClick={LogIn}>Log In</button>
                </div>
                <div className="login-links">
                    <div className="login-link">
                        <Link to="/register" style={linkStyles}><p>Register</p></Link><br />
                        <Link to="/restore-pass" style={linkStyles}><p>Forgot password</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;