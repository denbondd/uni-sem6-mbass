import React, {useEffect, useState} from "react";
import Backendless from "backendless";
import '../styles/form-styles.css';
import {useNavigate} from "react-router-dom";

function EditProfile() {

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [country, setCountry] = useState('')

    const navigate = useNavigate()

    const getUser = async () => {
        try{
            setUser(await Backendless.UserService.getCurrentUser())
        } catch(err) {
            console.error(err)
        }
    }

    const editProfile = async () => {
        try {
            await Backendless.Data.of('Users').save({
                objectId: user.objectId,
                name,
                email,
                age: +age,
                sex,
                country
            })
            alert('Your account data was updated')
            navigate('/account', { replace: true })
        } catch(err) {
            console.log(err)
        }
    }

    useEffect( () => {
        const fetchData = async () => {
            await getUser()
        }

        fetchData()
    })

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
                <div className="submit">
                    <button onClick={editProfile}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;