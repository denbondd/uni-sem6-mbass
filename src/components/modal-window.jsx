import React, { useState } from "react"
import '../styles/modal-styles.css'
import Backendless from "backendless"

function ModalWindow(props) {

    const [user, setUser] = useState('')
    const [userStatus, setUserStatus] = useState(false)

    const getUserByName = async (username) => {
        try {
            const whereClause = `name = '${user}'`
            const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(whereClause)
            const [ userByName ] = await Backendless.Data.of('Users').find(queryBuilder)
            if(userByName) {
                setUserStatus(true)
                try {
                    console.log(props.file.fileURL)
                    const res = await Backendless.Files.copyFile(props.file.fileURL,`https://eu.backendlessappcontent.com/${process.env.REACT_APP_ID}/${process.env.REACT_APP_API_KEY}/files/${user}/shared_with_me`)
                    console.log(res)
                } catch(err) {
                    console.log(err)
                }
            } else {
                setUserStatus(false)
                return
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <p>File name - {props.file.fileName}</p>
                <input
                    type="text"
                    value={user}
                    onChange={event => setUser(event.target.value)}
                />
                <p className={userStatus? 'userExists': 'userDoesntExists'}>{userStatus? 'user exists': 'user doesnt exists'}</p>
                <button className="submit-button" onClick={getUserByName}>Share</button>
            </div>
        </div>
    )
}

export default ModalWindow