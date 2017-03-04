import React from 'react'
import { connect } from 'react-redux'
import { saveCredentials } from '../../actions.js'

let CredentialsForm = ({dispatch, credentials}) => {
    let newUsername, newPassword
    console.log(credentials.username)
    return(
    <div>
        <b>Give me your deets!</b><br />
        <form onSubmit={e => {
         e.preventDefault()
         console.log(newUsername.value, newPassword.value)
         if(!newUsername.value.trim() && !newPassword.value.trim()) {
             return
         }
         dispatch(saveCredentials(newUsername.value, newPassword.value))
         
         
        }}>

            <input ref={ thisInput => { newUsername = thisInput } } defaultValue={credentials.username}/> <br />
            <input ref={ thisInput => { newPassword = thisInput } } defaultValue={credentials.password}/> <br/>
            <button type='submit'>Save</button>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        credentials: state.credentials
    }
    
}

CredentialsForm = connect(mapStateToProps)(CredentialsForm)

export default CredentialsForm