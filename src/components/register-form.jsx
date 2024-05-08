import React, { useState } from "react";
import Backendless from "backendless";
import '../styles/form-styles.css';
import { useNavigate } from "react-router-dom";

function RegisterForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [isHide, setIsHide] = useState(true)
    const currType = 'password'

    const navigate = useNavigate()

    const registerUser = async () => {
        try{
            let user = new Backendless.User()
            user.name = name
            user.email = email
            user.age = +age
            user.sex = sex
            user.country = country
            user.password = password
            await Backendless.UserService.register(user)

            setName('')
            setEmail('')
            setAge('')
            setSex('')
            setCountry('')
            setPassword('')
            alert('Please confirm your email. Message has been sent to your email.')
            navigate('/login', { replace: true })
        } catch(err) {
            console.log(err)
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
                    <p>Email</p>
                    <input 
                        type="text" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-content">
                    <p>Age</p>
                    <input 
                        type="text" 
                        value={age}
                        onChange={event => setAge(event.target.value)}
                    />
                </div>
                <div className="form-content">
                    <p>Sex</p>
                    <input 
                        type="text"
                        value={sex} 
                        onChange={event => setSex(event.target.value)}
                    />
                </div>
                <div className="form-content">
                    <p>Country</p>
                    <input 
                        type="text" 
                        value={country}
                        onChange={event => setCountry(event.target.value)}
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
                        <input type="checkbox" onChange={event => setIsHide(event.target.checked)}/>
                    </div>
                </div>
                <div className="submit">
                    <button onClick={registerUser}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;