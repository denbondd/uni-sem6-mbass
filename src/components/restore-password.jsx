import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/form-styles.css';
import Backendless from "backendless";

function RestorePassword() {

    const [name, setName] = useState('')

    const navigate = useNavigate()

    const send = async () => {
        try{    
            await Backendless.UserService.restorePassword(name)
            alert('Request for changing your password was sent')
            navigate('/login', { replace: true })
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <div className="form-container">
            <div className="form">
                <div className="">
                    <p>Name</p>
                    <input 
                        type="text" 
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className="submit">
                    <button onClick={send}>Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default RestorePassword;